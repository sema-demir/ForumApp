import axios from "axios";
import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

axios.defaults.baseURL = "http://localhost:3090";
export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  //oturumu acık olan kullanıcımınım bilgileri burada tutulur
  const [activeUser, setActiveUser] = useState();

  const navigate = useNavigate();

  useEffect(() => {
    const id = localStorage.getItem("TOKEN");
    if (id) {
      axios
        .get(`/users/${id}`)
        .then((res) => {
          setActiveUser(res.data);
        })
        .catch((err) => toast.error("Kullanıcı bilgier alınamadı"));
    } else {
      navigate("/login");
    }
  }, []);

  //hesap olusturma
  const signup = (user) => {
    axios.post("/users", user).then(() => {
      //kullanıcının id sini locale kaydet
      localStorage.setItem("TOKEN", user.id);

      //aktif kullanıcının stateni güncelle

      setActiveUser(user);

      //ansayfaya yönlendir
      navigate("/");

      //bidirm gönder
      toast.success("Hesabınız Başarıyla Oluşturuldu");
    });
  };
  //hesaba griş yapma
  const login = (user) => {
    axios
      .get(`/users?name=${user.name}&password=${user.password}`)
      .then((res) => {
        if (res.data.length === 0) {
          toast.error("Bilgilerinizle Eşlesen Kullanıcı Bulunamadı");
        } else {
          setActiveUser(res.data[0]);
          localStorage.setItem("TOKEN", res.data[0].id);
          navigate("/");
          toast.success("Hesaba Giriş Yapılıyor");
        }
      })
      .catch((err) => console.log(err));
  };

  //kullanıcı hesabından cık
  const logout = () => {
    localStorage.removeItem("TOKEN");

    //aktif kullanıcıyı sıfırla
    setActiveUser(null);
    navigate("/login");
  };
  //kullanıcı hesabı sil
  const deleteAccount = () => {
    axios.delete(`/users/${activeUser.id}`).then(() => {
      logout();
      toast.warning("Hesabınız Kaldırıldı");
    });
  };

  //kullanıcı hesabı güncelle
  const updatePassword = (newPass) => {
    axios
    .patch(`users/${activeUser.id}`, { password: newPass }).then((res) => {
      logout(); //şifre değiştikten sonra hesaba tekrargiriş yapılması icin bunu kullandım
      toast.success("Şifreniz Basarıyla Güncellendi");
    });
  };

  return (
    <UserContext.Provider
      value={{
        activeUser,
        signup,
        login,
        logout,
        deleteAccount,
        updatePassword,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
