import type { PrimitiveProps } from "reka-ui";
import type { HTMLAttributes } from "vue";

import type { ButtonVariants } from ".";

export type ButtonProps = {
  variant?: ButtonVariants["variant"];
  size?: ButtonVariants["size"];
  class?: HTMLAttributes["class"];
} & PrimitiveProps;
