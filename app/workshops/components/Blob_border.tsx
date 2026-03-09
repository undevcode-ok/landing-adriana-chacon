type Props = {
  colors: string[];
};

export function BlobBorder({ colors }: Props) {
  const [c1, c2, c3, c4] = colors;
  return (
    <svg
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      className="absolute inset-0 w-full h-full"
      xmlns="http://www.w3.org/2000/svg"
    >
      <ellipse cx="0"   cy="0"   rx="22" ry="22" fill={c1} />
      <ellipse cx="50"  cy="0"   rx="28" ry="16" fill={c2} />
      <ellipse cx="100" cy="0"   rx="22" ry="22" fill={c3} />
      <ellipse cx="0"   cy="35"  rx="16" ry="20" fill={c2} />
      <ellipse cx="0"   cy="65"  rx="16" ry="20" fill={c4} />
      <ellipse cx="100" cy="35"  rx="16" ry="20" fill={c4} />
      <ellipse cx="100" cy="65"  rx="16" ry="20" fill={c1} />
      <ellipse cx="0"   cy="100" rx="22" ry="22" fill={c3} />
      <ellipse cx="50"  cy="100" rx="28" ry="16" fill={c4} />
      <ellipse cx="100" cy="100" rx="22" ry="22" fill={c2} />
    </svg>
  );
}