import Sidebar from './Sidebar';
import CenterCanvas from './CenterCanvas';
import FieldList from './FieldList';
function Main({ fields, addField }) {
  return (
    <div className="flex">
      <Sidebar />
      <CenterCanvas fields={fields} />
      <FieldList addField={addField} />
    </div>
  );
}
export default Main;