import { Plus } from "lucide-react";

const Hero = () => {
  return (
    <div className="text-center space-y-8">
      <div className="space-y-4">
        <h2 className="font-bold text-[48px] text-[#1F2937]">
          Friends to keep close in your life
        </h2>
        <p className="text-[16px] text-[#64748B] w-6/12 mx-auto">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the relationships that matter most.
        </p>
      </div>

      <button className="btn bg-[#244D3F] text-white">
        <Plus />
        <span>Add A Friend</span>
      </button>
    </div>
  );
};

export default Hero;
