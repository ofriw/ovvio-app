import IconBase, { IconProps } from './IconBase.tsx';

const IconExportPdf = ({ fill = '#9CB2CD', className = '' }: IconProps) => (
  <IconBase size="big" className={className}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <path
        fill={fill}
        fillRule="evenodd"
        d="M17.872 9.864l1-1.87c0-.098-.04-.197-.108-.267l-4.45-4.614C14.256 3.039 14.14 3 14.05 3H5.54c-.206 0-.372.17-.372.38v6.484H4v7.555h1.168v3.2c0 .21.166.381.371.381h7.965v-.761H5.911v-2.82h12.217v2.82h-4.624V21H18.5c.205 0 .372-.17.372-.38v-3.2H20V9.863h-2.128zm-3.45-5.557l3.188 3.307h-3.189V4.307zM9.67 13.764c-.258.249-.64.36-1.085.36-.1 0-.189-.005-.258-.015v1.223H7.58v-3.373c.233-.041.56-.071 1.02-.071.466 0 .798.09 1.021.274.213.172.357.456.357.79 0 .336-.11.62-.307.812zm3.434 1.162c-.352.299-.887.441-1.541.441-.392 0-.669-.025-.857-.05v-3.358c.277-.046.639-.071 1.02-.071.635 0 1.046.116 1.368.365.347.264.565.684.565 1.288 0 .654-.233 1.106-.555 1.385zm3.34-2.38H15.16v.782h1.199v.629h-1.2v1.375h-.757v-3.42h2.04v.635zm-4.638-.065c.649 0 1.055.375 1.05 1.086 0 .816-.446 1.202-1.13 1.197-.094 0-.198 0-.262-.016v-2.237c.064-.015.173-.03.342-.03zm-3.167-.01c.377 0 .59.188.59.502 0 .35-.248.558-.65.558-.108 0-.188-.005-.252-.02V12.5c.055-.015.159-.03.312-.03zm5.04-8.71v4.233c0 .21.166.38.37.38h4.08v1.49H5.91V3.761h7.767z"
      />
    </svg>
  </IconBase>
);
export default IconExportPdf;
