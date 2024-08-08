import AlteroLogo from "@/components/atoms/Logo/AlteroLogo";
import Portfolio from "../Portfolio/Portfolio";

export default function LandingPage() {
  return (
    <div className="relative z-20 mx-auto flex h-full flex-col items-start py-12 md:py-12 overflow-auto">
      {/* <div className="max-w-md w-full mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center space-y-6">
          <div className="flex flex-col items-center space-y-2">
            <div className="bg-white rounded-full p-2">
              <AlteroLogo />
            </div>
            <h1 className="text-2xl font-bold text-primary">
              Altero Creative Hub
            </h1>
            <p className="text-muted text-center">📍 Bali & Singapore</p>
          </div>
        </div>
      </div> */}
      <div className="w-full">
        <Portfolio />
      </div>
    </div>
  );
}
