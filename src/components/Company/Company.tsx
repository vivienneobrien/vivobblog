const Company = ({ companyData }: any) => {
  // but type outside of obejct here
  return (
    <div>
      <table>
        <thead>
          <tr>
            <td>ID</td>
            <td>Name</td>
          </tr>
        </thead>
        <tbody>
          {companyData.map(
            (
              item: any // need to wrap it if you are putting a type on it
            ) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Company;
