interface Props {
  title: string;
  highlight?: string;
  subtitle?: string;
  center?: boolean;
}

export default function SectionTitle({
  title,
  highlight,
  subtitle,
  center = true,
}: Props) {
  return (
    <div className={center ? "text-center" : ""}>
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
        {title}{" "}
        {highlight && (
          <span className="text-[#C9A227]">
            {highlight}
          </span>
        )}
      </h2>

      {subtitle && (
        <p className="mx-auto mt-3 sm:mt-4 max-w-2xl text-xs sm:text-sm md:text-base text-gray-500 leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}