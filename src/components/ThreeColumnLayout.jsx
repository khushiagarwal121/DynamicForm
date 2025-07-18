export default function ThreeColumnLayout({ children }) {
  // flexbox-based horizontal layout 
  // Allows to pass any number of child components and arrange them side by side with some spacing
  return <div className="flex gap-4 p-4">{children}</div>;
}
