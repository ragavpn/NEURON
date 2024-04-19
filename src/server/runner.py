import torch
import torchvision.transforms as transforms
from torchvision.models import densenet169
from torchvision.io import read_video
from PIL import Image
import os
import numpy as np
import torch.nn as nn
import warnings

warnings.filterwarnings("ignore")
device = torch.device('cuda' if torch.cuda.is_available() else 'cpu')

# Load the model and its weights
def load_model(model_path):
    model = densenet169(pretrained=True)
    num_ftrs = model.classifier.in_features
    model.classifier = nn.Linear(num_ftrs, 4)
    model = model.to(device)
    checkpoint = torch.load(model_path)
    model.load_state_dict(checkpoint['model_state_dict'])
    model.eval()
    return model

# Process images
def process_images(folder_path, model):
    transform = transforms.Compose([
        transforms.Resize(256),
        transforms.CenterCrop(224),
        transforms.ToTensor(),
        transforms.Normalize(mean=[0.485, 0.456, 0.406], std=[0.229, 0.224, 0.225]),
    ])

    images = []
    for filename in os.listdir(folder_path):
        if filename.endswith(".jpg") or filename.endswith(".png"):
            img_path = os.path.join(folder_path, filename)
            img = Image.open(img_path)
            img_t = transform(img)
            images.append(img_t.unsqueeze(0))
    
    if len(images) == 0:
        return torch.tensor([])
    images = torch.cat(images)
    images = images.to(device)
    outputs = model(images)
    return outputs

# Process videos
def process_videos(folder_path, model):
    outputs = []
    for filename in os.listdir(folder_path):
        if filename.endswith(".mp4"):
            video_path = os.path.join(folder_path, filename)
            video, _, _ = read_video(video_path, pts_unit='sec')
            frames = video[:, ::30]
            frames = frames.to(device)
            outputs.extend(process_images(frames, model))
    if len(outputs) == 0:
        return torch.tensor([])
    return torch.stack(outputs)

# Compute the result
def compute_result(outputs):
    if len(outputs) == 0:
        return "No outputs found"
    weights = torch.tensor([0.25, 0.30, 0.15, 0.20])
    weights = weights / weights.sum()
    weights = weights.to(device)
    _,result = torch.max((outputs * weights).data, 1)
    return result

def print_dementia_info(dementia_class):
    info = {
        2: {
            "category": "Non-Demented",
            "description": "Individuals in this category do not exhibit signs of dementia.",
            "measures_to_take": [
                "Maintain a healthy lifestyle including regular exercise and a balanced diet.",
                "Engage in mentally stimulating activities such as puzzles, reading, and social interactions.",
                "Schedule regular check-ups with a primary care physician or geriatric specialist for preventive care."
            ],
            "what_to_avoid": [
                "Excessive alcohol consumption and smoking, as they can increase the risk of cognitive decline.",
                "Sedentary lifestyle and isolation, as they may contribute to cognitive decline over time."
            ],
            "whom_to_consult": [
                "Primary care physician or geriatric specialist for routine health assessments.",
                "Neurologist if experiencing any cognitive changes or concerns."
            ]
        },
        3: {
            "category": "Very Mildly Demented",
            "description": "Individuals in this category may exhibit subtle cognitive changes but are still able to function independently in most daily activities.",
            "measures_to_take": [
                "Establish a routine and utilize memory aids such as calendars and reminders to help with organization.",
                "Stay socially engaged and maintain regular physical activity to promote overall well-being.",
                "Consider cognitive training exercises or programs to help maintain cognitive function."
            ],
            "what_to_avoid": [
                "Stressful situations or overstimulation, as they may exacerbate cognitive symptoms.",
                "Making major life decisions without consulting a trusted caregiver or healthcare professional."
            ],
            "whom_to_consult": [
                "Primary care physician or neurologist for monitoring and management of cognitive symptoms.",
                "Psychologist or counselor for emotional support and coping strategies."
            ]
        },
        0: {
            "category": "Mildly Demented",
            "description": "Individuals in this category may experience noticeable cognitive decline affecting daily functioning, but they can still perform many tasks independently with assistance.",
            "measures_to_take": [
                "Implement safety measures at home such as removing tripping hazards and installing handrails to prevent accidents.",
                "Develop a care plan with input from healthcare professionals and caregivers to address specific needs and challenges.",
                "Consider medication and therapy options to manage symptoms and improve quality of life."
            ],
            "what_to_avoid": [
                "Isolation or withdrawal from social activities, as it can worsen cognitive and emotional symptoms.",
                "Ignoring signs of caregiver stress or burnout, as it can impact the well-being of both the caregiver and the individual with dementia."
            ],
            "whom_to_consult": [
                "Neurologist or psychiatrist for medication management and behavioral interventions.",
                "Occupational therapist or geriatric care manager for assistance with daily activities and long-term planning."
            ]
        },
        1: {
            "category": "Moderately Demented",
            "description": "Individuals in this category have significant cognitive impairment and require assistance with most daily activities.",
            "measures_to_take": [
                "Establish a structured daily routine and provide consistent supervision and support.",
                "Consider long-term care options such as assisted living facilities or in-home care services if needed.",
                "Focus on maintaining comfort and dignity through compassionate care and attention to individual needs."
            ],
            "what_to_avoid": [
                "Overwhelming the individual with complex tasks or stimuli, as it may cause confusion and distress.",
                "Delaying discussions about end-of-life care preferences and advanced directives."
            ],
            "whom_to_consult": [
                "Palliative care team or hospice provider for specialized support and symptom management.",
                "Social worker or elder care advocate for assistance with navigating care options and accessing resources."
            ]
        }
    }

    if dementia_class not in info:
        return "Invalid dementia class provided."

    category_info = info[dementia_class]

    output = []
    output.append(f"Category: {category_info['category']}")
    output.append(f"Description: {category_info['description']}")
    output.append("\nMeasures to Take:")
    output.extend([f"- {measure}" for measure in category_info['measures_to_take']])
    output.append("\nWhat to Avoid:")
    output.extend([f"- {avoid}" for avoid in category_info['what_to_avoid']])
    output.append("\nWhom to Consult:")
    output.extend([f"- {consult}" for consult in category_info['whom_to_consult']])

    return "\n".join(output)

def return_info(image_path, video_path, model):
    # Process the images and videos
    image_outputs = process_images(image_path, model)
    video_outputs = process_videos(video_path, model)

    # Compute the result
    image_result = compute_result(image_outputs)
    video_result = compute_result(video_outputs)


    if (image_result != "No outputs found"):
        return print_dementia_info(image_result.item())

    if (video_result != "No outputs found"):
        return print_dementia_info(video_result.item())
    else:
        return "No outputs found."

model_path = './densenet169.pth'
image_path = './inputs'
video_path = './inputs'

# Load the model
model = load_model(model_path)


return_info(image_path, video_path, model)