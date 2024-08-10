"use client";

export const ShimmerButton = ({ title }: { title: string }) => {
  return (
    <button className="inline-flex py-2 z-10 cursor-pointer animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000319,45%,#1e2631,55%,#000319)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none  active:scale-95">
      {title}
    </button>
  );
};
