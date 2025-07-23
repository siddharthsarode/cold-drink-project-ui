import React from "react";

const ClipPathTitle = ({ color, className, bg, title, borderColor }) => {
  return (
    <div className="general-title">
      <div
        className={`${className} border-[.5vw] text-nowrap opacity-0`}
        style={{
          clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)",
          borderColor: borderColor,
        }}
      >
        <div
          className="px-3 pt-3 pb-5 md:px-14 md:pt-0"
          style={{
            backgroundColor: bg,
          }}
        >
          <h2
            style={{
              color: color,
            }}
          >
            {title}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default ClipPathTitle;
