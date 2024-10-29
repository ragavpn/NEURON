# Alzheimer's Detection using DenseNet-169 on the OASIS Brain MRI Dataset

## Aim of the Project

This project focuses on detecting Alzheimer's disease stages through advanced deep learning techniques applied to brain MRI scans. Using the **OASIS** dataset, which categorizes brain scans into four categories—**Non-Demented, Very Mild Dementia, Mild Dementia, and Moderate Dementia**—our goal is to achieve high classification accuracy and provide meaningful support for Alzheimer's diagnosis.

The project progressed through three major stages, from a basic neural network to the advanced **DenseNet-169** model, showcasing continuous improvements in performance and accuracy.

The base dataset can be downloaded from [OASIS](https://www.kaggle.com/datasets/ninadaithal/imagesoasis?select=Data).

---

## Project Overview

The project evolved in three stages:

1. **Initial Implementation**: A feed-forward neural network with 10 layers.
2. **Intermediate Neural Network with Residual Connections**: This approach improved accuracy by incorporating advanced layer connections.
3. **Final Model Using DenseNet-169**: A model with densely connected layers, skip connections, and feature reuse, achieving superior performance.

Each stage of the project brought its own set of improvements, challenges, and insights, leading to a robust model for Alzheimer's detection.

---

## Where We Started: Feed-Forward Neural Network (FFNN)

### 1. Feed-Forward Neural Network with 10 Layers

In the first stage, we implemented a basic **Feed-Forward Neural Network (FFNN)** with 10 layers. Each layer was fully connected, with ReLU activations for non-linearity, followed by dropout for regularization. Although simple, this model provided a foundational baseline accuracy for our experiments.

- **Network Architecture**: 10 dense layers with ReLU activation.
- **Dropout**: Applied after each layer to prevent overfitting.

## Then We Progressed: Neural Network with Residual Connections

In the second stage, we enhanced our model with residual connections, allowing the model to pass information across layers efficiently.

### Intermediate Neural Network Model

This model featured advanced layer connections that allowed for deeper networks while minimizing issues such as vanishing gradients. Each layer output was combined with the output from two layers prior, enabling deeper learning without degradation.

- **Residual Connections**: Each layer takes input from all preceding layers, improving gradient flow and enabling deeper networks.
- **Output**: This model provided improved accuracy but fell short on handling complex, non-linear relationships in the data.

## Finally We Arrived: DenseNet-169 Model

In the third stage, we adopted the **DenseNet-169** architecture. This model leverages densely connected layers, where each layer’s output is connected to every subsequent layer, effectively reusing features and reducing the need for large parameter counts.

### DenseNet-169 Implementation

DenseNet-169 is particularly effective due to its **skip connections** and **feature reuse** properties, allowing each layer to learn based on all previous layers’ outputs. This architecture provided significantly improved accuracy over the previous two approaches.

- **Densely Connected Layers**: All layers contribute to subsequent layers, maximizing feature reuse.
- **Skip Connections**: Each layer takes input from all preceding layers, improving gradient flow and enabling deeper networks.
- **Output**: Achieved the highest accuracy across all models, distinguishing between all dementia stages.

---

## Challenges and Solutions

### Model Complexity and Training Time
With DenseNet-169’s complexity, training time was substantially higher. This was mitigated by using **GPU acceleration** and **data augmentation** to maximize data variability.

### Overfitting in the Intermediate Model
Regularization techniques, including **dropout** and **early stopping**, were introduced to manage overfitting in the intermediate model.

---

## Future Improvements

### Advanced Architectures:
More advanced neural network architectures, such as **EfficientNet**, can be explored for improved efficiency and accuracy.

### Multi-modal Integration:
Alongside MRI data, other diagnostic modalities, such as **cerebrospinal fluid tests**, can be integrated to enhance diagnostic accuracy.

### Hyperparameter Tuning:
Extensive hyperparameter tuning, especially **learning rate schedules**, could be employed to further refine model accuracy.

---

## The Website Preview

The project includes a web interface built using **Next.js**, **Sass**, **Tailwind CSS**, and **TypeScript**, making the model accessible and user-friendly.

### Website Features:

- **Home Page**: An informational landing page introducing the tool.
- **Upload Page**: Allows users to upload MRI scans for dementia analysis.
- **Results Page**: Displays results, with a category and recommendations.

![HOME](https://github.com/ragavpn/NEURON/assets/118587215/20b14e7c-4b91-4746-a1a0-585e3a77d922)

![WORK](https://github.com/ragavpn/NEURON/assets/118587215/d9e58df5-91c5-41f8-b920-9dd283044163)

![RESULT](https://github.com/ragavpn/NEURON/assets/118587215/d8a5acc7-8271-4e4a-9122-24079d3d9599)

---

## Setup

### Running the Project

This setup script ensures you have all required dependencies and then starts the project. Make sure to have an active internet connection. Clone the repo and run the below commands in a terminal. The file /src/server/pyserver/runner.py contains the code for the ML model being run. The .pth file in the same directory are the saved weights and biases from when the model was trained.

```bash
cd NEURON
chmod +x run.sh
./run.sh
