export default function ThreeColumnLayout({ children }) {
  // flexbox-based horizontal layout 
  // Allows to pass any number of child components and arrange them side by side with some spacing
  return <div className="flex flex-col md:flex-row gap-4 p-4 h-screen bg-gray-50">{children}</div>;
}
