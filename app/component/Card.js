export default function Card({ title, children }) {
  return (
    <div className="m-8 shadow-md border rounded">
      <div className="m-2 text-lg font-bold">{title}</div>
      <div className="m-2">{children}</div>
    </div>
  );
}