import { FC } from 'react';

export interface SvgIconConstituentValues {
	strokeColor?: string;
	strokeWidth?: string;
	strokeWidth2?: string;
	strokeWidth3?: string;
	strokeFill?: string;
	fillColor?: string;
	fillColor2?: string;
	fillColor3?: string;
	fillColor4?: string;
	fillColor5?: string;
	fillColor6?: string;
	fillColor7?: string;
	imageWidth?: string;
	imageHeight?: string;
	width?: string;
	height?: string;
	rotateCenter?: number;
	className?: string;
	className2?: string;
	className3?: string;
	className4?: string;
	className5?: string;
}
export interface SvgIcon extends FC<SvgIconConstituentValues> {
	svg?: string;
}

export const LogoPic: SvgIcon = ({ fillColor }): JSX.Element => (
	<svg
		width="140"
		height="21"
		viewBox="0 0 140 21"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M3.87267 20.431C1.61897 21.7328 0 20.6479 0 18.7183C0 16.6642 0 10.5008 0 10.5008C0 10.5008 0 4.33736 0 2.28322C0 0.353629 1.61796 -0.731199 3.87267 0.570594C7.38278 2.59761 17.9121 8.68068 17.9121 8.68068C19.3121 9.48928 19.3121 11.5113 17.9121 12.3199C17.9121 12.3209 7.38278 18.4039 3.87267 20.431Z"
			fill={fillColor}
		/>
		<path
			d="M15.462 20.4293C13.2083 21.7311 11.5894 20.6462 11.5894 18.7166C11.5894 16.6625 11.5894 10.4991 11.5894 10.4991C11.5894 10.4991 11.5894 4.33565 11.5894 2.28151C11.5894 0.35192 13.2073 -0.732908 15.462 0.568885C18.8948 2.55171 29.1931 8.50118 29.1931 8.50118C30.7308 9.38914 30.7308 11.609 29.1931 12.497C29.1921 12.497 18.8948 18.4464 15.462 20.4293Z"
			fill="#BCEC30"
		/>
		<mask
			id="mask0_7_405"
			// style="mask-type:alpha"
			maskUnits="userSpaceOnUse"
			x="11"
			y="0"
			width="20"
			height="21"
		>
			<path
				d="M15.462 20.4293C13.2083 21.7311 11.5894 20.6462 11.5894 18.7166C11.5894 16.6625 11.5894 10.4991 11.5894 10.4991C11.5894 10.4991 11.5894 4.33565 11.5894 2.28151C11.5894 0.35192 13.2073 -0.732908 15.462 0.568885C18.8948 2.55171 29.1931 8.50118 29.1931 8.50118C30.7308 9.38914 30.7308 11.609 29.1931 12.497C29.1921 12.497 18.8948 18.4464 15.462 20.4293Z"
				fill="#6FE4FF"
			/>
		</mask>
		<g mask="url(#mask0_7_405)">
			<g filter="url(#filter0_f_7_405)">
				<path
					d="M3.87316 20.431C1.61946 21.7328 0.000488281 20.6479 0.000488281 18.7183C0.000488281 16.6642 0.000488281 10.5008 0.000488281 10.5008C0.000488281 10.5008 0.000488281 4.33736 0.000488281 2.28322C0.000488281 0.353629 1.61845 -0.731199 3.87316 0.570594C7.38327 2.59761 17.9126 8.68068 17.9126 8.68068C19.3126 9.48928 19.3126 11.5113 17.9126 12.3199C17.9126 12.3209 7.38327 18.4039 3.87316 20.431Z"
					fill="#99D100"
				/>
			</g>
		</g>
		<path
			d="M37.6903 14.1679L38.0829 13.2739C38.3506 12.6659 38.8324 12.505 39.4391 12.952C40.5991 13.8103 42.5086 14.4361 45.0606 14.4361C47.2378 14.4361 48.1658 13.8818 48.1658 13.2202C48.1658 12.4693 47.3984 12.2726 46.1313 12.1117L43.2403 11.7362C39.7604 11.2713 38.0115 10.0197 38.0115 7.83837C38.0115 5.49611 39.921 3.6366 44.3468 3.6366C46.8095 3.6366 48.3978 4.01207 49.4328 4.40543C50.5749 4.85243 50.7356 5.22791 50.7356 6.15766V7.3735C50.7356 8.12445 50.4679 8.37477 49.7362 8.37477H48.9153C48.1658 8.37477 47.9159 8.10657 47.9159 7.3735V6.98014C47.4341 6.81922 46.2384 6.58678 44.8464 6.58678C42.4016 6.58678 41.2237 7.03378 41.2237 7.78473C41.2237 8.33901 41.9376 8.66085 43.2403 8.83965L46.0778 9.21513C49.5042 9.64425 51.3245 10.6813 51.3245 13.1845C51.3245 15.7234 48.9153 17.3505 44.6144 17.3505C41.4557 17.3505 38.9216 16.3492 37.9044 15.4195C37.5475 15.0619 37.494 14.6149 37.6903 14.1679Z"
			fill="black"
		/>
		<path
			d="M69.0264 17.1354H67.563C66.8492 17.1354 66.6172 17.0281 66.2603 16.4917L63.512 12.433C63.1194 11.8787 62.816 11.7357 61.9951 11.7357H59.2469V16.1341C59.2469 16.8851 58.9792 17.1354 58.2475 17.1354H57.1946C56.4451 17.1354 56.1952 16.8672 56.1952 16.1341V2.93878H55.2137C54.4642 2.93878 54.2144 2.67058 54.2144 1.93751V1.04351C54.2144 0.292555 54.482 0.0422363 55.2137 0.0422363H58.2654C59.0149 0.0422363 59.2647 0.310435 59.2647 1.04351V8.76763H61.7274C62.5484 8.76763 62.8339 8.64247 63.2443 8.07031L65.5465 4.51221C65.9212 3.95793 66.1532 3.85066 66.867 3.85066H68.3304C69.1335 3.85066 69.2762 4.49433 68.8301 5.15589L66.2603 9.05371C65.9926 9.42918 65.6714 9.82254 65.368 10.1444C65.6892 10.4126 66.1354 10.8596 66.3138 11.1278L69.5261 15.8659C69.9722 16.4917 69.8116 17.1354 69.0264 17.1354Z"
			fill="black"
		/>
		<path
			d="M74.2481 19.567V18.6908C74.2481 17.9399 74.5158 17.6896 75.2475 17.6896H76.5145C77.2819 17.6896 77.6567 17.5287 77.9422 16.9207L78.1028 16.581L72.0352 5.08424C71.6605 4.38693 71.9638 3.86841 72.7491 3.86841H74.1232C74.837 3.86841 75.1582 3.99357 75.4259 4.51208L77.96 9.73302C78.549 10.931 79.2092 12.3077 79.7268 13.5057C80.2622 12.3435 80.8689 11.0025 81.44 9.8403L84.0276 4.51208C84.2596 4.01145 84.6165 3.86841 85.3304 3.86841H86.7045C87.5076 3.86841 87.7931 4.40481 87.4183 5.08424L80.512 18.226C79.7089 19.7458 78.7988 20.5861 76.7287 20.5861H75.2118C74.498 20.5861 74.2481 20.3179 74.2481 19.567Z"
			fill="black"
		/>
		<path
			d="M106.08 10.5025C106.08 14.7221 102.957 17.3505 98.7458 17.3505C96.9255 17.3505 95.5336 16.9035 94.5521 16.3492V19.9609C94.5521 20.7119 94.2844 20.9622 93.5527 20.9622H92.4998C91.7503 20.9622 91.5004 20.694 91.5004 19.9609V6.76558H90.5189C89.7694 6.76558 89.5195 6.49738 89.5195 5.76431V4.87031C89.5195 4.11935 89.7872 3.86904 90.5189 3.86904H93.0887C93.8382 3.86904 94.0881 4.13723 94.0881 4.87031V4.94183C95.0874 4.28027 96.6043 3.6366 98.7458 3.6366C102.957 3.65448 106.08 6.28282 106.08 10.5025ZM102.904 10.5025C102.904 8.03505 100.923 6.6583 98.4603 6.6583C96.6935 6.6583 95.248 7.40926 94.5699 8.01717V13.0057C95.2659 13.6136 96.6935 14.3645 98.4603 14.3645C100.923 14.3467 102.904 12.9699 102.904 10.5025Z"
			fill="black"
		/>
		<path
			d="M122.705 9.46551C122.705 10.2165 122.438 10.4668 121.706 10.4668H120.653C119.904 10.4668 119.654 10.2522 119.654 9.46551C119.654 7.49872 118.904 6.6226 117.12 6.6226C115.424 6.6226 114.015 7.67752 113.229 8.96487V16.1347C113.229 16.8857 112.962 17.136 112.23 17.136H111.177C110.428 17.136 110.178 16.8678 110.178 16.1347V6.76564H109.196C108.447 6.76564 108.197 6.49745 108.197 5.76437V4.87037C108.197 4.11942 108.464 3.8691 109.196 3.8691H111.766C112.515 3.8691 112.765 4.1373 112.765 4.87037V5.72861C113.711 4.6737 115.157 3.65454 117.619 3.65454C121.224 3.65454 122.705 5.80013 122.705 9.46551Z"
			fill="black"
		/>
		<path
			d="M124.6 10.5025C124.6 6.56897 127.919 3.65454 132.327 3.65454C136.699 3.65454 140.001 6.56897 140.001 10.5025C140.001 14.454 136.681 17.3684 132.327 17.3684C127.919 17.3684 124.6 14.454 124.6 10.5025ZM136.967 10.5025C136.967 8.21392 134.95 6.55109 132.327 6.55109C129.65 6.55109 127.633 8.2318 127.633 10.5025C127.633 12.8091 129.65 14.4898 132.327 14.4898C134.968 14.4898 136.967 12.8091 136.967 10.5025Z"
			fill="black"
		/>
		<defs>
			<filter
				id="filter0_f_7_405"
				x="-8.92896"
				y="-8.92774"
				width="36.8208"
				height="38.8571"
				filterUnits="userSpaceOnUse"
				color-interpolation-filters="sRGB"
			>
				<feFlood flood-opacity="0" result="BackgroundImageFix" />
				<feBlend
					mode="normal"
					in="SourceGraphic"
					in2="BackgroundImageFix"
					result="shape"
				/>
				<feGaussianBlur
					stdDeviation="4.46473"
					result="effect1_foregroundBlur_7_405"
				/>
			</filter>
		</defs>
	</svg>
);

export const homePic: FC = () => (
	<svg
		width="30"
		height="25"
		viewBox="0 0 30 25"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M4.3584 15.1559V15.1591L4.3584 20.2324C4.3584 22.3527 6.08259 24.0769 8.19968 24.0769H22.0289C24.146 24.0769 25.8702 22.3527 25.8702 20.2324V15"
			stroke="#009EE4"
		/>
		<path
			fill-rule="evenodd"
			clip-rule="evenodd"
			d="M16.6549 1.61657L28.5338 11.4153L28.5867 11.4633C29.4485 12.3251 29.4409 13.719 28.5882 14.5766L28.5867 14.5781C27.7371 15.4277 26.365 15.4379 25.5029 14.6085L15.1158 6.21083L4.72875 14.6085C3.86665 15.4379 2.49456 15.4277 1.64492 14.5781C0.785028 13.7182 0.785028 12.3232 1.64492 11.4633C1.66174 11.4465 1.67935 11.4305 1.6977 11.4153L13.5749 1.61542C14.0075 1.20153 14.5636 1.00083 15.1126 1.00006C15.6689 0.99608 16.2268 1.20331 16.6549 1.61657Z"
			stroke="#009EE4"
			stroke-linejoin="round"
		/>
		<path
			d="M9.59591 5V3.28925C9.59591 2.0781 8.61205 1.09424 7.4009 1.09424H6.55341C5.34226 1.09424 4.3584 2.0781 4.3584 3.28925V9"
			stroke="#009EE4"
		/>
		<path
			d="M11.4207 23.5865V17.7873C11.4207 16.378 12.5669 15.2318 13.9761 15.2318H16.2555C17.6648 15.2318 18.811 16.378 18.811 17.7873V23.5865"
			stroke="#009EE4"
		/>
	</svg>
);

export const addPic: FC = () => (
	<svg
		width="42"
		height="42"
		viewBox="0 0 42 42"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<circle cx="21" cy="21" r="20.5" stroke="#009EE4" />
		<path
			d="M20.4751 11.55V29.4001"
			stroke="#009EE4"
			stroke-linecap="round"
		/>
		<path
			d="M29.4001 20.475L11.5501 20.475"
			stroke="#009EE4"
			stroke-linecap="round"
		/>
	</svg>
);

export const profilePic: FC = () => (
	<svg
		width="28"
		height="27"
		viewBox="0 0 28 27"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<circle cx="14" cy="13.5" r="13" stroke="#009EE4" />
		<path
			d="M4.66089 22.6607C5.73135 18.5017 9.50677 15.4286 14 15.4286C18.4089 15.4286 22.1268 18.3876 23.276 22.428"
			stroke="#009EE4"
		/>
		<circle cx="13.9999" cy="8.67854" r="4.32143" stroke="#009EE4" />
	</svg>
);

export const LogoMobPic: FC = () => (
	<svg
		width="32"
		height="32"
		viewBox="0 0 32 32"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<rect width="32" height="32" rx="16" fill="white" />
		<path
			d="M8.55231 22.4652C7.06699 23.3231 6 22.6082 6 21.3365C6 19.9827 6 15.9206 6 15.9206C6 15.9206 6 11.8586 6 10.5048C6 9.23306 7.06633 8.5181 8.55231 9.37606C10.8657 10.712 17.8051 14.7211 17.8051 14.7211C18.7278 15.254 18.7278 16.5866 17.8051 17.1195C17.8051 17.1202 10.8657 21.1293 8.55231 22.4652Z"
			fill="#00C1FF"
		/>
		<path
			d="M16.1903 22.4641C14.7049 23.322 13.6379 22.6071 13.6379 21.3353C13.6379 19.9815 13.6379 15.9195 13.6379 15.9195C13.6379 15.9195 13.6379 11.8574 13.6379 10.5036C13.6379 9.23194 14.7043 8.51697 16.1903 9.37493C18.4527 10.6817 25.2398 14.6028 25.2398 14.6028C26.2532 15.188 26.2532 16.651 25.2398 17.2362C25.2392 17.2362 18.4527 21.1573 16.1903 22.4641Z"
			fill="#BCEC30"
		/>
		<mask
			id="mask0_7_764"
			// style="mask-type:alpha"
			maskUnits="userSpaceOnUse"
			x="13"
			y="9"
			width="14"
			height="14"
		>
			<path
				d="M16.1905 22.4641C14.7052 23.322 13.6382 22.6071 13.6382 21.3353C13.6382 19.9815 13.6382 15.9195 13.6382 15.9195C13.6382 15.9195 13.6382 11.8574 13.6382 10.5036C13.6382 9.23194 14.7045 8.51697 16.1905 9.37493C18.4529 10.6817 25.2401 14.6028 25.2401 14.6028C26.2535 15.188 26.2535 16.651 25.2401 17.2362C25.2394 17.2362 18.4529 21.1573 16.1905 22.4641Z"
				fill="#6FE4FF"
			/>
		</mask>
		<g mask="url(#mask0_7_764)">
			<g filter="url(#filter0_f_7_764)">
				<path
					d="M8.5528 22.4653C7.06748 23.3232 6.00049 22.6083 6.00049 21.3366C6.00049 19.9828 6.00049 15.9207 6.00049 15.9207C6.00049 15.9207 6.00049 11.8587 6.00049 10.5049C6.00049 9.23316 7.06682 8.51819 8.5528 9.37615C10.8662 10.7121 17.8056 14.7212 17.8056 14.7212C18.7283 15.2541 18.7283 16.5867 17.8056 17.1196C17.8056 17.1203 10.8662 21.1294 8.5528 22.4653Z"
					fill="#99D100"
				/>
			</g>
		</g>
		<defs>
			<filter
				id="filter0_f_7_764"
				x="-2.92896"
				y="0.0717678"
				width="30.356"
				height="31.6979"
				filterUnits="userSpaceOnUse"
				color-interpolation-filters="sRGB"
			>
				<feFlood flood-opacity="0" result="BackgroundImageFix" />
				<feBlend
					mode="normal"
					in="SourceGraphic"
					in2="BackgroundImageFix"
					result="shape"
				/>
				<feGaussianBlur
					stdDeviation="4.46473"
					result="effect1_foregroundBlur_7_764"
				/>
			</filter>
		</defs>
	</svg>
);

export const Logomini: FC = () => (
	<svg
		width="54"
		height="38"
		viewBox="0 0 54 38"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M6.89126 36.6721C2.88089 38.9885 0 37.0581 0 33.6245C0 29.9693 0 19.0017 0 19.0017C0 19.0017 0 8.03413 0 4.37888C0 0.945258 2.8791 -0.985148 6.89126 1.33134C13.1373 4.93834 31.8738 15.7629 31.8738 15.7629C34.3651 17.2018 34.3651 20.7998 31.8738 22.2387C31.8738 22.2405 13.1373 33.0651 6.89126 36.6721Z"
			fill="#00C1FF"
		/>
		<path
			d="M27.5138 36.6686C23.5034 38.9851 20.6226 37.0547 20.6226 33.6211C20.6226 29.9658 20.6226 18.9983 20.6226 18.9983C20.6226 18.9983 20.6226 8.03072 20.6226 4.37546C20.6226 0.94184 23.5017 -0.988566 27.5138 1.32792C33.6223 4.85627 51.9478 15.4431 51.9478 15.4431C54.6839 17.0232 54.6839 20.9734 51.9478 22.5534C51.946 22.5534 33.6223 33.1403 27.5138 36.6686Z"
			fill="#BCEC30"
		/>
		<mask
			id="mask0_7_86"
			// style="mask-type:alpha"
			maskUnits="userSpaceOnUse"
			x="20"
			y="0"
			width="34"
			height="38"
		>
			<path
				d="M27.5138 36.6686C23.5034 38.9851 20.6226 37.0547 20.6226 33.6211C20.6226 29.9658 20.6226 18.9983 20.6226 18.9983C20.6226 18.9983 20.6226 8.03072 20.6226 4.37546C20.6226 0.94184 23.5017 -0.988566 27.5138 1.32792C33.6223 4.85627 51.9478 15.4431 51.9478 15.4431C54.6839 17.0232 54.6839 20.9734 51.9478 22.5534C51.946 22.5534 33.6223 33.1403 27.5138 36.6686Z"
				fill="#6FE4FF"
			/>
		</mask>
		<g mask="url(#mask0_7_86)">
			<g filter="url(#filter0_f_7_86)">
				<path
					d="M6.89223 36.672C2.88186 38.9885 0.000976562 37.0581 0.000976562 33.6245C0.000976562 29.9692 0.000976562 19.0016 0.000976562 19.0016C0.000976562 19.0016 0.000976562 8.03407 0.000976562 4.37882C0.000976562 0.945197 2.88008 -0.985209 6.89223 1.33128C13.1383 4.93827 31.8748 15.7628 31.8748 15.7628C34.3661 17.2017 34.3661 20.7998 31.8748 22.2386C31.8748 22.2404 13.1383 33.065 6.89223 36.672Z"
					fill="#99D100"
				/>
			</g>
		</g>
		<defs>
			<filter
				id="filter0_f_7_86"
				x="-8.92848"
				y="-8.61048"
				width="51.6011"
				height="55.2242"
				filterUnits="userSpaceOnUse"
				color-interpolation-filters="sRGB"
			>
				<feFlood flood-opacity="0" result="BackgroundImageFix" />
				<feBlend
					mode="normal"
					in="SourceGraphic"
					in2="BackgroundImageFix"
					result="shape"
				/>
				<feGaussianBlur
					stdDeviation="4.46473"
					result="effect1_foregroundBlur_7_86"
				/>
			</filter>
		</defs>
	</svg>
);

export const IconLoader: FC = () => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="200px"
		height="200px"
		viewBox="0 0 100 100"
		preserveAspectRatio="xMidYMid"
	>
		<g transform="translate(80,50)">
			<g transform="rotate(0)">
				<circle cx="0" cy="0" r="6" stroke="none" fillOpacity="1">
					<animateTransform
						attributeName="transform"
						type="scale"
						begin="-0.875s"
						values="1.5 1.5;1 1"
						keyTimes="0;1"
						dur="1s"
						repeatCount="indefinite"
					></animateTransform>
					<animate
						attributeName="fill-opacity"
						keyTimes="0;1"
						dur="1s"
						repeatCount="indefinite"
						values="1;0"
						begin="-0.875s"
					></animate>
				</circle>
			</g>
		</g>
		<g transform="translate(71.21320343559643,71.21320343559643)">
			<g transform="rotate(45)">
				<circle cx="0" cy="0" r="6" stroke="none" fillOpacity="0.875">
					<animateTransform
						attributeName="transform"
						type="scale"
						begin="-0.75s"
						values="1.5 1.5;1 1"
						keyTimes="0;1"
						dur="1s"
						repeatCount="indefinite"
					></animateTransform>
					<animate
						attributeName="fill-opacity"
						keyTimes="0;1"
						dur="1s"
						repeatCount="indefinite"
						values="1;0"
						begin="-0.75s"
					></animate>
				</circle>
			</g>
		</g>
		<g transform="translate(50,80)">
			<g transform="rotate(90)">
				<circle cx="0" cy="0" r="6" stroke="none" fillOpacity="0.75">
					<animateTransform
						attributeName="transform"
						type="scale"
						begin="-0.625s"
						values="1.5 1.5;1 1"
						keyTimes="0;1"
						dur="1s"
						repeatCount="indefinite"
					></animateTransform>
					<animate
						attributeName="fill-opacity"
						keyTimes="0;1"
						dur="1s"
						repeatCount="indefinite"
						values="1;0"
						begin="-0.625s"
					></animate>
				</circle>
			</g>
		</g>
		<g transform="translate(28.786796564403577,71.21320343559643)">
			<g transform="rotate(135)">
				<circle cx="0" cy="0" r="6" stroke="none" fillOpacity="0.625">
					<animateTransform
						attributeName="transform"
						type="scale"
						begin="-0.5s"
						values="1.5 1.5;1 1"
						keyTimes="0;1"
						dur="1s"
						repeatCount="indefinite"
					></animateTransform>
					<animate
						attributeName="fill-opacity"
						keyTimes="0;1"
						dur="1s"
						repeatCount="indefinite"
						values="1;0"
						begin="-0.5s"
					></animate>
				</circle>
			</g>
		</g>
		<g transform="translate(20,50.00000000000001)">
			<g transform="rotate(180)">
				<circle cx="0" cy="0" r="6" stroke="none" fillOpacity="0.5">
					<animateTransform
						attributeName="transform"
						type="scale"
						begin="-0.375s"
						values="1.5 1.5;1 1"
						keyTimes="0;1"
						dur="1s"
						repeatCount="indefinite"
					></animateTransform>
					<animate
						attributeName="fill-opacity"
						keyTimes="0;1"
						dur="1s"
						repeatCount="indefinite"
						values="1;0"
						begin="-0.375s"
					></animate>
				</circle>
			</g>
		</g>
		<g transform="translate(28.78679656440357,28.786796564403577)">
			<g transform="rotate(225)">
				<circle cx="0" cy="0" r="6" stroke="none" fillOpacity="0.375">
					<animateTransform
						attributeName="transform"
						type="scale"
						begin="-0.25s"
						values="1.5 1.5;1 1"
						keyTimes="0;1"
						dur="1s"
						repeatCount="indefinite"
					></animateTransform>
					<animate
						attributeName="fill-opacity"
						keyTimes="0;1"
						dur="1s"
						repeatCount="indefinite"
						values="1;0"
						begin="-0.25s"
					></animate>
				</circle>
			</g>
		</g>
		<g transform="translate(49.99999999999999,20)">
			<g transform="rotate(270)">
				<circle cx="0" cy="0" r="6" stroke="none" fillOpacity="0.25">
					<animateTransform
						attributeName="transform"
						type="scale"
						begin="-0.125s"
						values="1.5 1.5;1 1"
						keyTimes="0;1"
						dur="1s"
						repeatCount="indefinite"
					></animateTransform>
					<animate
						attributeName="fill-opacity"
						keyTimes="0;1"
						dur="1s"
						repeatCount="indefinite"
						values="1;0"
						begin="-0.125s"
					></animate>
				</circle>
			</g>
		</g>
		<g transform="translate(71.21320343559643,28.78679656440357)">
			<g transform="rotate(315)">
				<circle cx="0" cy="0" r="6" stroke="none" fillOpacity="0.125">
					<animateTransform
						attributeName="transform"
						type="scale"
						begin="0s"
						values="1.5 1.5;1 1"
						keyTimes="0;1"
						dur="1s"
						repeatCount="indefinite"
					></animateTransform>
					<animate
						attributeName="fill-opacity"
						keyTimes="0;1"
						dur="1s"
						repeatCount="indefinite"
						values="1;0"
						begin="0s"
					></animate>
				</circle>
			</g>
		</g>
	</svg>
);
