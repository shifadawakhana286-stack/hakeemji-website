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
      <h2 className="text-4xl font-bold lg:text-5xl">
        {title}{" "}
        {highlight && (
          <span className="text-[#C9A227]">
            {highlight}
          </span>
        )}
      </h2>

      {subtitle && (
        <p className="mx-auto mt-5 max-w-2xl text-gray-500">
          {subtitle}
        </p>
      )}
    </div>
  );
}