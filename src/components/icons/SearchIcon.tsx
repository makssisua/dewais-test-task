
interface Props {
  width?: string,
  height?: string,
  fill?: string
}

export default function SearchIcon(props: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="50"
      height="50"
      viewBox="0 0 256 256"
      {...props}
    >
      <path
        fill="#fff"
        strokeMiterlimit="10"
        d="M21 3C11.602 3 4 10.602 4 20s7.602 17 17 17c3.355 0 6.46-.984 9.094-2.656l12.281 12.281 4.25-4.25L34.5 30.281C36.68 27.421 38 23.88 38 20c0-9.398-7.602-17-17-17zm0 4c7.2 0 13 5.8 13 13s-5.8 13-13 13S8 27.2 8 20 13.8 7 21 7z"
        fontFamily="none"
        fontSize="none"
        fontWeight="none"
        textAnchor="none"
        transform="scale(5.12)"
      ></path>
    </svg>
  );
}