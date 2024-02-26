import * as React from 'react'
const Logo = ({ darkMode = false }: { darkMode?: boolean }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={68}
    height={42}
    fill='none'
    role='img'
    aria-label='Logo comparatasas.ar'
  >
    <path
      fill='#6E727A'
      d='M14.318 41.88v-9.523h3.756c.72 0 1.333.13 1.841.386.512.255.9.616 1.167 1.084.27.465.405 1.012.405 1.64 0 .633-.136 1.177-.41 1.633-.272.452-.667.8-1.185 1.041-.514.242-1.137.363-1.869.363h-2.515v-1.618h2.19c.384 0 .703-.053.957-.158.255-.106.444-.264.568-.474.127-.211.19-.473.19-.786 0-.316-.063-.583-.19-.8a1.17 1.17 0 0 0-.572-.493c-.254-.114-.575-.172-.962-.172H16.33v7.876h-2.013Zm5.142-4.334 2.366 4.333h-2.222l-2.315-4.333h2.17ZM6.034 41.88H3.877l3.287-9.523h2.594l3.283 9.522h-2.158l-2.385-7.346h-.074l-2.39 7.346ZM5.9 38.135h5.096v1.572H5.9v-1.572ZM1.483 42c-.307 0-.57-.108-.79-.325a1.086 1.086 0 0 1-.326-.79c0-.305.109-.565.326-.782.22-.217.483-.325.79-.325.298 0 .558.108.781.325.223.217.335.477.335.781 0 .205-.053.392-.158.563a1.202 1.202 0 0 1-.405.404c-.167.1-.351.149-.553.149Z'
    />
    <path
      fill={darkMode ? '#fff' : '#292B2E'}
      d='M41.148 18.982c-.037-.375-.197-.666-.48-.874-.281-.207-.664-.311-1.148-.311-.328 0-.605.046-.832.14-.226.089-.4.215-.52.376a.907.907 0 0 0-.177.548c-.006.17.03.32.107.447.08.127.19.237.33.33.14.09.3.169.483.237.183.065.379.12.586.167l.856.205c.415.093.796.217 1.143.372.348.155.648.345.902.572.255.226.451.492.59.8.144.306.216.658.22 1.055-.004.582-.152 1.088-.447 1.515-.291.425-.713.755-1.265.99-.548.233-1.21.35-1.985.35-.768 0-1.438-.118-2.008-.354-.567-.236-1.01-.584-1.33-1.046-.316-.465-.482-1.04-.497-1.725h1.948c.021.32.113.586.274.8.164.21.383.37.655.479.276.105.588.158.935.158.34 0 .637-.05.888-.15.254-.098.451-.236.59-.413.14-.177.21-.38.21-.609a.792.792 0 0 0-.19-.54c-.125-.145-.308-.269-.55-.371a5.574 5.574 0 0 0-.878-.28l-1.037-.26c-.803-.195-1.437-.5-1.902-.915-.465-.416-.695-.975-.692-1.679-.003-.576.15-1.08.46-1.51.313-.432.742-.768 1.288-1.01.545-.241 1.165-.362 1.86-.362.706 0 1.323.12 1.85.362.53.242.942.578 1.237 1.01.294.43.446.929.455 1.496h-1.93ZM27.916 25.765H25.76l3.287-9.521h2.595l3.282 9.521h-2.157L30.38 18.42h-.075l-2.39 7.345Zm-.134-3.742h5.095v1.571h-5.095v-1.571ZM22.948 18.982c-.037-.375-.197-.666-.479-.874-.282-.207-.665-.311-1.148-.311-.329 0-.606.046-.833.14-.226.089-.4.215-.52.376a.907.907 0 0 0-.177.548c-.006.17.03.32.107.447.08.127.19.237.33.33.14.09.3.169.484.237.183.065.378.12.585.167l.856.205c.415.093.796.217 1.144.372.347.155.647.345.901.572.255.226.451.492.591.8.143.306.215.658.218 1.055-.003.582-.151 1.088-.446 1.515-.291.425-.713.755-1.264.99-.549.233-1.21.35-1.986.35-.768 0-1.438-.118-2.008-.354-.567-.236-1.01-.584-1.33-1.046-.316-.465-.482-1.04-.497-1.725h1.948c.021.32.113.586.274.8.164.21.383.37.656.479.276.105.587.158.934.158.341 0 .637-.05.888-.15.254-.098.451-.236.59-.413.14-.177.21-.38.21-.609a.792.792 0 0 0-.19-.54 1.447 1.447 0 0 0-.55-.371 5.579 5.579 0 0 0-.878-.28l-1.037-.26c-.803-.195-1.437-.5-1.902-.915-.464-.416-.695-.975-.692-1.679-.003-.576.15-1.08.46-1.51.313-.432.742-.768 1.288-1.01.545-.241 1.165-.362 1.86-.362.706 0 1.323.12 1.85.362.53.242.942.578 1.237 1.01.294.43.446.929.455 1.496h-1.93ZM9.717 25.765H7.559l3.287-9.521h2.595l3.282 9.521h-2.157L12.18 18.42h-.075l-2.39 7.345Zm-.135-3.742h5.095v1.571H9.582v-1.571ZM0 17.904v-1.66h7.82v1.66H4.905v7.861h-1.99v-7.861H0ZM60.618 9.652h-2.157L61.748.13h2.594l3.282 9.522h-2.157l-2.385-7.346h-.074l-2.39 7.346Zm-.135-3.743h5.096v1.572h-5.096V5.909ZM50.254 9.652V.13h3.757c.719 0 1.332.129 1.84.386.512.254.901.615 1.168 1.083.27.465.404 1.012.404 1.642 0 .632-.136 1.176-.409 1.631-.273.453-.668.8-1.185 1.042-.515.242-1.138.363-1.87.363h-2.515V4.659h2.19c.384 0 .704-.053.958-.159.254-.105.443-.263.567-.474.127-.21.19-.472.19-.785 0-.317-.063-.583-.19-.8a1.169 1.169 0 0 0-.572-.493c-.254-.115-.575-.172-.962-.172h-1.358v7.876h-2.013Zm5.142-4.333 2.367 4.333H55.54l-2.315-4.333h2.171ZM41.97 9.652h-2.157L43.1.13h2.595l3.282 9.522H46.82l-2.385-7.346h-.075l-2.39 7.346Zm-.134-3.743h5.095v1.572h-5.095V5.909ZM32.821 9.652V.13h3.757c.722 0 1.337.138 1.846.414.508.273.895.652 1.162 1.139.27.484.404 1.041.404 1.674 0 .632-.136 1.19-.409 1.674-.272.483-.668.86-1.185 1.13-.515.269-1.138.404-1.87.404h-2.394V4.95h2.07c.387 0 .706-.066.957-.2.254-.136.443-.323.567-.562.127-.242.19-.52.19-.832 0-.316-.063-.592-.19-.828a1.273 1.273 0 0 0-.567-.553c-.254-.133-.576-.2-.967-.2h-1.358v7.876h-2.013ZM20.71.13h2.483l2.622 6.398h.112L28.549.13h2.483v9.522h-1.953V3.454H29l-2.464 6.151h-1.33l-2.464-6.174h-.079v6.22H20.71V.132ZM19.088 4.891c0 1.038-.197 1.922-.59 2.65-.39.728-.924 1.285-1.6 1.67-.672.38-1.428.571-2.268.571-.847 0-1.606-.192-2.279-.576-.672-.385-1.204-.941-1.594-1.67-.39-.728-.586-1.61-.586-2.645 0-1.038.195-1.922.586-2.65.39-.728.922-1.283 1.595-1.664C13.024.192 13.782 0 14.63 0c.84 0 1.596.192 2.268.577.676.38 1.21.936 1.6 1.664.393.728.59 1.612.59 2.65Zm-2.04 0c0-.673-.101-1.24-.303-1.702-.198-.461-.479-.812-.841-1.05-.363-.239-.788-.358-1.274-.358-.487 0-.912.119-1.274.358-.363.238-.645.589-.846 1.05-.199.462-.298 1.03-.298 1.702 0 .673.1 1.24.298 1.702.201.461.483.812.846 1.05.362.239.787.358 1.274.358.486 0 .91-.119 1.274-.358.362-.238.643-.589.841-1.05.201-.462.302-1.03.302-1.702ZM8.764 3.464H6.727a1.991 1.991 0 0 0-.227-.702 1.786 1.786 0 0 0-.442-.53 1.944 1.944 0 0 0-.623-.335 2.383 2.383 0 0 0-.758-.116c-.493 0-.922.122-1.288.367-.365.242-.649.595-.85 1.06-.202.462-.303 1.023-.303 1.683 0 .679.101 1.25.302 1.711.205.462.49.81.856 1.046s.789.353 1.27.353c.269 0 .518-.035.748-.107.232-.07.438-.175.618-.311.18-.14.329-.308.446-.507.121-.198.205-.424.251-.679l2.037.01a3.8 3.8 0 0 1-1.237 2.348c-.35.316-.769.567-1.255.753-.484.183-1.03.274-1.641.274-.85 0-1.609-.192-2.278-.576-.667-.385-1.194-.941-1.581-1.67-.385-.728-.577-1.61-.577-2.645 0-1.038.196-1.922.586-2.65.39-.728.92-1.283 1.59-1.664C3.041.192 3.794 0 4.631 0c.551 0 1.063.077 1.534.232a3.89 3.89 0 0 1 1.26.68c.366.294.663.655.893 1.083.232.427.38.917.446 1.469Z'
    />
  </svg>
)
export default Logo
