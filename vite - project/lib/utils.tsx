import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: (ClassValue | string | undefined)[]) {
  return twMerge(clsx(inputs.filter(Boolean)));
}
export function cnSimple(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
  }
