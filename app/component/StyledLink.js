export default function StyledLink({ href, text }) {
  return <a href={href} target="_blank" rel="noopener noreferrer" className="underline text-card-text2 hover:text-card-text3">{text}</a>;
}