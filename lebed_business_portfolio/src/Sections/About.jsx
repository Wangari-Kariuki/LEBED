import '../index.css';

export default function AboutSection() {
  return (
    <div className="h-auto w-full flex items-center justify-center px-4 py-8 ">
      {/* Text content */}
      <div className="text-container-about w-full flex items-center justify-center text-center px-4 w-[50%]">
        <p className="text-sm lg:text-[30px] text-[#FAF0E6] leading-relaxed">
          We specialize in a range of services from skilled rehabilitation services to companionship 
          and daily living assistance, all designed to enhance the quality of life for our clients.
        </p>
      </div>
    </div>
  );
}
