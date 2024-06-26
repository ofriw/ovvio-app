import React from 'react';
import { useTheme } from '../../theme.tsx';
import IconBase, { IconProps } from './IconBase.tsx';

function IconFilter({ fill, className }: IconProps) {
  const theme = useTheme();
  const fillColor = fill || theme.background.text;
  return (
    <IconBase size="small" className={className}>
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2.79775 15.6405C2.70296 15.6386 2.61259 15.6001 2.54555 15.5331C2.47852 15.4661 2.44004 15.3757 2.4382 15.2809V0.719103C2.4382 0.623744 2.47608 0.532285 2.54351 0.464857C2.61094 0.397428 2.70239 0.359552 2.79775 0.359552C2.89311 0.359552 2.98458 0.397428 3.052 0.464857C3.11943 0.532285 3.1573 0.623744 3.1573 0.719103V15.2809C3.1573 15.3763 3.11943 15.4677 3.052 15.5351C2.98458 15.6026 2.89311 15.6405 2.79775 15.6405Z"
          fill={fillColor}
        />
        <path
          d="M2.79775 16C2.60703 16 2.42413 15.9242 2.28928 15.7894C2.15442 15.6545 2.07865 15.4716 2.07865 15.2809V0.719102C2.07865 0.528385 2.15442 0.345478 2.28928 0.21062C2.42413 0.0757626 2.60703 9.53674e-07 2.79775 9.53674e-07C2.98846 9.53674e-07 3.17138 0.0757626 3.30624 0.21062C3.4411 0.345478 3.51685 0.528385 3.51685 0.719102V15.2809C3.51685 15.4716 3.4411 15.6545 3.30624 15.7894C3.17138 15.9242 2.98846 16 2.79775 16Z"
          fill={fillColor}
        />
        <path
          d="M8.21978 15.6405C8.12442 15.6405 8.03297 15.6026 7.96554 15.5351C7.89811 15.4677 7.86022 15.3763 7.86022 15.2809V0.719103C7.86022 0.623744 7.89811 0.532285 7.96554 0.464857C8.03297 0.397428 8.12442 0.359552 8.21978 0.359552C8.31513 0.359552 8.40658 0.397428 8.47401 0.464857C8.54144 0.532285 8.57933 0.623744 8.57933 0.719103V15.2809C8.57748 15.3757 8.539 15.4661 8.47197 15.5331C8.40494 15.6001 8.31456 15.6386 8.21978 15.6405V15.6405Z"
          fill={fillColor}
        />
        <path
          d="M8.21978 16C8.02906 16 7.84616 15.9242 7.7113 15.7894C7.57645 15.6545 7.50067 15.4716 7.50067 15.2809V0.719102C7.50067 0.528385 7.57645 0.345478 7.7113 0.21062C7.84616 0.0757626 8.02906 9.53674e-07 8.21978 9.53674e-07C8.41049 9.53674e-07 8.59339 0.0757626 8.72825 0.21062C8.8631 0.345478 8.93888 0.528385 8.93888 0.719102V15.2809C8.93888 15.4716 8.8631 15.6545 8.72825 15.7894C8.59339 15.9242 8.41049 16 8.21978 16Z"
          fill={fillColor}
        />
        <path
          d="M13.6346 15.6405C13.5398 15.6386 13.4494 15.6001 13.3824 15.5331C13.3154 15.4661 13.2769 15.3757 13.2751 15.2809V0.719103C13.2751 0.623744 13.3129 0.532285 13.3804 0.464857C13.4478 0.397428 13.5392 0.359552 13.6346 0.359552C13.73 0.359552 13.8214 0.397428 13.8888 0.464857C13.9563 0.532285 13.9942 0.623744 13.9942 0.719103V15.2809C13.9942 15.3763 13.9563 15.4677 13.8888 15.5351C13.8214 15.6026 13.73 15.6405 13.6346 15.6405Z"
          fill={fillColor}
        />
        <path
          d="M13.6346 16C13.4439 16 13.261 15.9242 13.1261 15.7894C12.9913 15.6545 12.9155 15.4716 12.9155 15.2809V0.719102C12.9155 0.528385 12.9913 0.345478 13.1261 0.21062C13.261 0.0757626 13.4439 9.53674e-07 13.6346 9.53674e-07C13.8253 9.53674e-07 14.0082 0.0757626 14.1431 0.21062C14.278 0.345478 14.3537 0.528385 14.3537 0.719102V15.2809C14.3537 15.4716 14.278 15.6545 14.1431 15.7894C14.0082 15.9242 13.8253 16 13.6346 16Z"
          fill={fillColor}
        />
        <path
          d="M2.79775 14.0225C3.79062 14.0225 4.59551 13.2176 4.59551 12.2247C4.59551 11.2318 3.79062 10.427 2.79775 10.427C1.80488 10.427 1 11.2318 1 12.2247C1 13.2176 1.80488 14.0225 2.79775 14.0225Z"
          fill={fillColor}
        />
        <path
          d="M8.21258 6.46472C9.20546 6.46472 10.0103 5.65984 10.0103 4.66697C10.0103 3.67409 9.20546 2.86921 8.21258 2.86921C7.21971 2.86921 6.41483 3.67409 6.41483 4.66697C6.41483 5.65984 7.21971 6.46472 8.21258 6.46472Z"
          fill={fillColor}
        />
        <path
          d="M13.6346 10.8944C14.6275 10.8944 15.4324 10.0895 15.4324 9.09663C15.4324 8.10376 14.6275 7.29888 13.6346 7.29888C12.6417 7.29888 11.8369 8.10376 11.8369 9.09663C11.8369 10.0895 12.6417 10.8944 13.6346 10.8944Z"
          fill={fillColor}
        />
      </svg>
    </IconBase>
  );
}

export default IconFilter;
