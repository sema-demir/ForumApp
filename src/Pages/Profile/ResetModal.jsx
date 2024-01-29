const ResetModal = ( { isOpen, close, confirm }) => {
    if (!isOpen) {
        return null
    }
  return (
    <div className="fixed  w-full h-screen bg-black bg-opacity-50 inset-0 grid place-items-center">
      <form
       onSubmit={(e) => {
        confirm(e.target[0].value)
        close()
    }} className="flex flex-col gap-[24px] p-[50px] m-5 p-md-[80px] bg-white text-black rounded-lg">
    <div className="flex justify-end">
        <span onClick={close} className="cursor-pointer">X</span>
    </div>
    <h2>Şifre Yenileme İşlemi</h2>

    <label> Yeni Şifre </label>
    <input className="py-3 px-4 w-full border-2 border-gray-200 text-sm focus:border-blue-500 focus:ring-blue-500 shadow-sm" type="password" />
    <button 
   
     className="bg-blue-500 py-3 px-4 font-semibold
      text-white transition rounded hover:bg-blue-600  "
    >Şifreyi Onayla
    </button>
        </form>
        </div>
  )
}

export default ResetModal