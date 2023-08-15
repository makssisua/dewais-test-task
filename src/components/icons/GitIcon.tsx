
interface Props {
  width?: string,
  height?: string,
  fill?: string
}

export default function GitIcon(props: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="50"
      height="50"
      viewBox="0 0 50 50"
      {...props}
    >
      <path d="M25 4c.566 0 1.098.219 1.496.621L45.38 23.504a2.112 2.112 0 010 2.992L26.496 45.38c-.398.402-.93.621-1.496.621a2.088 2.088 0 01-1.496-.621L4.62 26.496a2.112 2.112 0 010-2.992l12.32-12.32 2.274 2.273a5.98 5.98 0 001.543 5.785c.367.367.785.684 1.242.945v9.63A5.99 5.99 0 0019 35c0 3.309 2.691 6 6 6s6-2.691 6-6a5.99 5.99 0 00-3-5.184v-7.574l1.215 1.215a5.98 5.98 0 001.543 5.785A5.963 5.963 0 0035 31c1.602 0 3.11-.625 4.242-1.758a6.005 6.005 0 000-8.484 5.927 5.927 0 00-4.222-1.75c-.528 0-1.055.07-1.563.207l-2.672-2.672a5.98 5.98 0 00-1.543-5.785 5.927 5.927 0 00-4.222-1.75c-.528 0-1.055.07-1.563.207L21.184 6.94l2.32-2.32C23.902 4.22 24.434 4 25 4m0-2c-1.055 0-2.11.402-2.91 1.207l-3.735 3.734 4.622 4.622a4.055 4.055 0 012.043-.555c1.015 0 2.03.387 2.808 1.164a3.988 3.988 0 01.606 4.848l4.543 4.543a4.055 4.055 0 012.043-.555c1.015 0 2.03.387 2.808 1.164A3.999 3.999 0 0135 29a3.987 3.987 0 01-2.828-1.172c-1.317-1.316-1.508-3.316-.606-4.851l-4.543-4.543a3.88 3.88 0 01-1.023.421v12.286A3.99 3.99 0 0129 35a4 4 0 01-8 0 3.99 3.99 0 013-3.86V18.856a3.955 3.955 0 01-1.828-1.027 3.988 3.988 0 01-.606-4.848l-4.625-4.625L3.207 22.09a4.112 4.112 0 000 5.82L22.09 46.793A4.093 4.093 0 0025 48c1.055 0 2.11-.402 2.91-1.207L46.793 27.91a4.112 4.112 0 000-5.82L27.91 3.207A4.093 4.093 0 0025 2z"></path>
    </svg>
  );
}