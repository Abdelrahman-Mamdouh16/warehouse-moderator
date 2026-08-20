interface PersonalInfo {
  label: string;
  value: string;
}
export default function InfoCard({personalInfo}: { personalInfo: PersonalInfo[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
      {personalInfo.map((info, i) => (
        <div
          className="bg-card border shadow-sm rounded-lg py-5 px-3 w-full"
          key={info.label + i}
        >
          <div className="flex flex-col justify-between items-start h-full py-2 min-w-0">
            <h3 className="font-semibold text-muted shrink-0">{info.label}</h3>
            <p className="font-medium text-foreground break-all">
              {info.value}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
