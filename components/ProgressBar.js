export default function ProgressBar({ progress }) {
  return (
    <div className="bg-[#37533C] h-2 w-[100%] rounded-xl mb-10">
      <div className={`bg-[#769E7D] rounded-xl h-2 w-[${progress}%]`} />
    </div>
  );
}
