export default function Alert(props) {
  return (
    <>
      <div style={{ height: "50px" }}>
      {props.alert && (
        <div className={`alert alert-${props.alert.type}`} role="alert">
          {props.alert.msg}
        </div>
      )}
      </div>
    </>
  );
}
