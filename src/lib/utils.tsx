export default function cn(...inputs: (string | undefined | false)[]) {
  return inputs.filter(Boolean).join(" ");
}
