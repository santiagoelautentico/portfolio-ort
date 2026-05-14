
export default function BackgroundBorder({ children }) {
  return (
    <>
      <div className="bg-page" />
      <div className="bg-page2">{children}</div>
    </>
  );
}
