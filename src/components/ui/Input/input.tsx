import * as React from "react";

import { cn } from "@/lib/utils";
import Image from "next/image";
import styles from "./input.module.css";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  search: string;
  setSearch: Function;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, search, setSearch, ...props }, ref) => {
    return (
      <div className={styles.searchBar}>
        <input
          type={type}
          className={cn(
            "flex h-10 w-full rounded-md border border-neutral-200 px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-white focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 dark:border-neutral-800 dark:bg-neutral-950 dark:ring-offset-neutral-950 dark:placeholder:text-neutral-400 dark:focus-visible:ring-neutral-300",
            className,
            styles.input,
          )}
          ref={ref}
          {...props}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          value={search}
        />
        <div className={styles.searchIcon}>
          <Image src="/search.svg" width={20} height={20} alt="search" />
        </div>
      </div>
    );
  },
);
Input.displayName = "Input";

export { Input };
