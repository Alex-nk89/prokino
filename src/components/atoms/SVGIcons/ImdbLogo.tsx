import { memo, FC } from "react";

export const ImdbLogo: FC = memo(() => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="800"
      width="1200"
      viewBox="-444 -355.19975 3848 2131.1985"
    >
      <path
        d="M100.88 412.659C45.17 412.659 0 457.739 0 513.359v805.6c0 55.62 45.17 100.7 100.88 100.7h1898.24c55.71 0 100.88-45.08 100.88-100.7v-805.6c0-55.62-45.17-100.7-100.88-100.7z"
        clipRule="evenodd"
        fill="#fff"
        fillRule="evenodd"
      />
      <g transform="translate(0 -.199) scale(1.40952)">
        <radialGradient
          id="a"
          cx="1032.27"
          cy="541.585"
          r="847.355"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#fcf06e" />
          <stop offset=".99" stopColor="#dba506" />
        </radialGradient>
        <path
          d="M2100 920.291V86.771c-5.681-44.38-40.28-79.729-84.34-86.63H85.16C36.91 7.701 0 49.371 0 99.661V907.4c0 55.641 45.19 100.74 100.93 100.74H1999.9c51.36.001 93.76-38.299 100.1-87.849z"
          clipRule="evenodd"
          fill="url(#a)"
          fillRule="evenodd"
        />
        <radialGradient
          id="b"
          cx="1041.999"
          cy="-1827.189"
          r="794.369"
          gradientTransform="matrix(1 0 0 .8718 0 1638.777)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#fff" />
          <stop offset="1" stopColor="#fff" stopOpacity="0" />
        </radialGradient>
        <path
          d="M90 .5h1920v352.641H90z"
          clipRule="evenodd"
          opacity=".4"
          fill="url(#b)"
          fillRule="evenodd"
        />
      </g>
      <path
        d="M408.762 280.495h223.72v861.22h-223.72z"
        clipRule="evenodd"
        fillRule="evenodd"
      />
      <path
        d="M632.482 280.495v861.22h-223.72v-861.22h223.72m19.733-19.733H389.029v900.686h263.186V280.495z"
        fill="#fbfbed"
        opacity=".3"
      />
      <path
        d="M1109.605 280.495l-51.814 402.335-32.052-218.787c-9.345-70.22-18.282-131.408-26.81-183.548h-290.05v861.22H904.83l.704-568.645 82.472 568.644h139.57l78.243-581.301.705 581.301h195.332V280.495z"
        clipRule="evenodd"
        fillRule="evenodd"
      />
      <path
        d="M1401.856 280.495v861.22h-195.332l-.705-581.302-78.242 581.301H988.006L905.534 573.07l-.704 568.644H708.878V280.495H998.93c8.527 52.139 17.464 113.326 26.809 183.548l32.052 218.787 51.814-402.335h292.251m19.733-19.733H1092.25l-2.217 17.213-33.5 260.132-11.251-76.792c-9.324-70.06-18.368-131.968-26.879-184.004l-2.706-16.548H689.144v900.686h235.394l.025-19.708.368-297.44 43.546 300.248 2.45 16.901h173.905l2.302-17.1 39.306-292.026.35 289.417.025 19.71h234.774V280.497z"
        fill="#fbfbed"
        opacity=".3"
      />
      <path
        d="M1751.714 435.486c8.839 5.117 14.505 13.194 16.972 24.146 2.467 10.98 3.721 35.928 3.721 74.86v333.873c0 57.34-3.721 92.451-11.15 105.362-7.429 12.94-27.231 19.381-59.382 19.381V427.79c24.369 0 41.001 2.566 49.839 7.696zm-2.312 706.228c53.592 0 93.704-2.916 120.345-8.767 26.628-5.835 48.981-16.112 67.108-30.798 18.098-14.689 30.784-35.04 38.071-61.09 7.273-26.005 11.6-77.637 11.6-154.822V583.78c0-81.456-3.186-136.075-8.147-163.871-4.975-27.782-17.393-53.012-37.281-75.678-19.875-22.665-48.911-38.945-87.08-48.854-38.155-9.909-100.458-14.884-208.737-14.884h-166.916v861.219h271.037z"
        clipRule="evenodd"
        fillRule="evenodd"
      />
      <path
        d="M1645.28 280.495c108.28 0 170.583 4.976 208.737 14.885 38.17 9.909 67.208 26.189 87.08 48.854 19.889 22.665 32.307 47.896 37.282 75.677 4.962 27.796 8.146 82.415 8.146 163.871v302.456c0 77.186-4.326 128.818-11.599 154.822-7.287 26.048-19.973 46.402-38.071 61.09-18.127 14.686-40.482 24.963-67.108 30.798-26.64 5.85-66.753 8.768-120.345 8.768h-271.037v-861.22h166.916m56.592 712.612c32.151 0 51.954-6.441 59.383-19.38 7.43-12.912 11.15-48.023 11.15-105.363V534.491c0-38.93-1.255-63.88-3.721-74.86-2.467-10.951-8.135-19.028-16.973-24.145-8.837-5.13-25.468-7.696-49.839-7.696v565.318m-56.592-732.346h-186.649v900.686h290.77c55.557 0 96.306-3.018 124.578-9.226 29.485-6.461 54.822-18.149 75.298-34.739 21.26-17.255 36.279-41.175 44.653-71.106 8.18-29.25 12.329-83.128 12.329-160.138V583.784c0-78.49-2.924-136.353-8.453-167.339-5.602-31.273-19.69-59.943-41.877-85.225-22.424-25.575-55.046-44.06-96.954-54.94-41.325-10.733-107.233-15.518-213.695-15.518zm76.325 711.525V448.268c13.671 1.18 18.729 3.43 20.199 4.284 2.72 1.574 6.021 4.282 7.628 11.415 1.208 5.376 3.24 21.704 3.24 70.524v333.874c0 74.893-6.522 92.048-8.521 95.52-.439.766-4.113 6.077-22.546 8.402z"
        fill="#fbfbed"
        opacity=".3"
      />
      <path
        d="M2353.693 932.738c0 41.68-2.072 68.01-6.2 78.962-4.144 10.966-22.158 16.477-35.816 16.477-13.32 0-22.2-5.286-26.71-15.9-4.496-10.599-6.725-34.799-6.725-72.63V712.048c0-39.241 1.973-63.696 5.934-73.436 3.948-9.698 12.574-14.575 25.878-14.575 13.645 0 31.956 5.54 36.634 16.675 4.666 11.135 7.005 34.914 7.005 71.308zm-290.968-652.243v861.22h201.409l13.94-54.873c18.21 22.059 38.297 38.606 60.271 49.629 21.96 11.02 54.761 16.52 80.117 16.52 35.365 0 65.896-9.29 91.62-27.839 25.71-18.563 42.06-40.51 49.037-65.796 6.961-25.301 10.444-63.74 10.444-115.384v-241.62c0-51.998-1.17-85.94-3.483-101.853-2.338-15.913-9.19-32.179-20.605-48.797-11.432-16.604-28.023-29.516-49.814-38.72-21.776-9.218-47.458-13.813-77.086-13.813-25.71 0-58.664 5.116-80.625 15.265-21.96 10.148-41.861 25.555-59.707 46.204V280.495z"
        clipRule="evenodd"
        fillRule="evenodd"
      />
      <path
        d="M2278.24 280.495v280.143c17.846-20.65 37.747-36.056 59.708-46.204 21.96-10.149 54.915-15.265 80.624-15.265 29.63 0 55.31 4.595 77.086 13.813 21.791 9.204 38.381 22.116 49.814 38.72 11.417 16.618 18.267 32.884 20.606 48.797 2.313 15.914 3.482 49.855 3.482 101.853v241.62c0 51.645-3.482 90.083-10.444 115.384-6.977 25.285-23.328 47.233-49.037 65.796-25.724 18.55-56.255 27.838-91.62 27.838-25.355 0-58.156-5.497-80.117-16.52-21.974-11.022-42.06-27.57-60.271-49.628l-13.94 54.872h-201.406V280.495h215.515m33.435 747.682c13.659 0 31.672-5.511 35.816-16.477 4.13-10.952 6.2-37.28 6.2-78.962V712.021c0-36.394-2.339-60.173-7.004-71.308-4.679-11.135-22.991-16.675-36.634-16.675-13.304 0-21.932 4.877-25.879 14.575-3.96 9.74-5.934 34.195-5.934 73.436v227.597c0 37.832 2.229 62.033 6.725 72.632 4.51 10.613 13.39 15.9 26.71 15.9m-13.702-767.416h-254.981v900.686h236.488l3.78-14.875 5.21-20.511c12.924 11.448 26.642 20.83 41.026 28.046 27.374 13.739 65.034 18.614 88.965 18.614 39.406 0 74.114-10.62 103.16-31.566 29.334-21.178 48.345-46.933 56.52-76.553 7.506-27.284 11.154-66.74 11.154-120.632V702.35c0-53.371-1.205-87.615-3.687-104.69-2.78-18.91-10.808-38.122-23.87-57.135-13.568-19.707-33.213-35.086-58.401-45.724-24.086-10.195-52.61-15.368-84.765-15.368-23.956 0-61.614 4.474-88.903 17.085-11.01 5.088-21.592 11.385-31.696 18.848V280.495zm13.702 747.682c-6.9 0-7.7-1.888-8.548-3.885-1.204-2.84-5.152-15.951-5.152-64.914V712.049c0-51.018 3.43-63.419 4.48-66.004.367-.897.598-1.027.842-1.165.461-.261 2.312-1.108 6.759-1.108 8.867 0 16.669 3.271 18.663 5.149 1.737 4.615 5.242 19.378 5.242 63.101V932.74c0 49.77-3.022 66-4.623 71.1-2.17 1.741-9.496 4.604-17.663 4.604z"
        fill="#fbfbed"
        opacity=".3"
      />
    </svg>
  );
});
