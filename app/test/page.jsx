const Page = () => {
  const handleForm = async () => {
    "use server";
    console.log("formData");
  };

  return (
    <div>
      <form action={handleForm}>
        <input type="text" name="" />
        <button>Send</button>
      </form>
    </div>
  );
};

export default Page;
