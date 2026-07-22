export default function Logo() {
  return (
    <a href="#" className="flex items-center gap-3">
      <svg
        width="48"
        height="48"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0"
      >
        <path
          d="M 50,10 L 95,55 L 80,55 L 50,25 L 20,55 L 5,55 Z"
          fill="#FF6600"
        />

        <polygon
          points="50,40 15,85 85,85"
          fill="#FF6600"
        />
      </svg>

      <div className="leading-none">
        <div className="text-3xl md:text-4xl font-black tracking-tight">
          <span className="text-white">casa</span>
          <span className="text-[#FF6600]">yaa</span>
        </div>

        <div className="text-[10px] md:text-xs tracking-[0.35em] text-gray-300 mt-1">
          TU CASA. YA.
        </div>
      </div>
    </a>
  );
}