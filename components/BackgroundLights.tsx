export default function BackgroundLights() {
  return (
    <>
      {/* LUZ DERECHA */}
      <div className="absolute top-0 right-0 w-[900px] h-[900px] bg-green-500/20 blur-[180px] rounded-full"></div>

      {/* LUZ IZQUIERDA */}
      <div className="absolute bottom-0 left-0 w-[700px] h-[700px] bg-emerald-400/20 blur-[180px] rounded-full"></div>

      {/* LUZ CENTRAL */}
      <div className="absolute top-[30%] left-[30%] w-[600px] h-[600px] bg-white/5 blur-[150px] rounded-full"></div>
    </>
  );
}