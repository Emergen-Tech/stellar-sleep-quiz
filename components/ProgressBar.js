export default function ProgressBar({ progress }) {
  return (
    <div className='bg-[#37533C] h-2 w-full rounded-xl mb-10'>
      <div
        style={{ width: `${progress}%` }}
        className={`bg-[#769E7D] transition-all duration-300 rounded-xl h-2`}
      />
    </div>
  );
}
