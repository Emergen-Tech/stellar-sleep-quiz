export default function ProgressBar({ progress }) {
  console.log(progress, "progress");
  // const WidthChange = `w-[${progress.toString()}%]`;

  return (
    <div className="bg-[#37533C] h-2 w-full rounded-xl mb-10">
      <div className={`bg-[#769E7D] rounded-xl h-2 w-[${progress}%]`} />
    </div>
  );
}
