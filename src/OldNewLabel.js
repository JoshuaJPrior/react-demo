export const OldNewLabel = (props) => {
  if (props.released > 2000) {
    return (
      <div>
        <p>new</p>
      </div>
    );
  }
  return (
    <div>
      <p>old</p>
    </div>
  );
};
