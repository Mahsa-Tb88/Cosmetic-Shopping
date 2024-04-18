import axios from "axios";

axios.defaults.baseURL = SERVER_URL;
const authAxios = axios.create({
  baseURL: SERVER_URL,
});

authAxios.interceptors.request.use(
  (config) => {
    const token = localStorage.token ?? sessionStorage.token;
    if (token) {
      config.headers.Authorization = "Bearer " + token;
    }
    return config;
  },
  (error) => console.log(error)
);

export async function initialize() {
  try {
    const { data } = await authAxios.get("/misc/initialize");
    return data;
  } catch (e) {
    getError(e);
  }
}

export async function register(user) {
  try {
    const { data } = await authAxios.post("/auth/register", user);

    return data;
  } catch (e) {
    console.log(e.response.data.message);
    if (!e.response) {
      return { success: false, message: "Connection Error" };
    } else {
      return { success: false, code: e.response.data.code };
    }
  }
}
export async function login(user) {
  try {
    const { data } = await axios.post("/auth/login", user);
    return data;
  } catch (e) {
    if (!e.response) {
      return { success: false, message: "Connection Error" };
    } else {
      return { success: false, message: "Username or Password is not true!" };
    }
  }
}

export async function getAllCategories() {
  try {
    const { data } = await axios.get("/categories");
    return data;
  } catch (e) {
    if (!e.response) {
      return { success: false, message: "Connection Error" };
    } else {
      return { success: false, message: "somethin wrong!" };
    }
  }
}
export async function getProducts(
  page = 1,
  limit = 6,
  category = "",
  q = "",
  sort = "id",
  order = "desc"
) {
  try {
    const { data } = await axios.get("/products", {
      params: { page, limit, category, q, sort, order },
    });
    return data;
  } catch (e) {
    if (!e.response) {
      return { success: false, message: "Connection Error" };
    } else {
      return { success: false, message: "Something wrong!" };
    }
  }
}
export async function getCategories(page, limit = 5) {
  try {
    const { data } = await axios.get("/categories", {
      params: { page, limit },
    });
    return data;
  } catch (e) {
    if (!e.response) {
      return { success: false, message: "Connection Error" };
    } else {
      return { success: false, message: "Something wrong!" };
    }
  }
}
export async function getUsers(page) {
  try {
    const { data } = await authAxios.get("/users", { params: { page } });
    return data;
  } catch (e) {
    if (!e.response) {
      return { success: false, message: "Connection Error" };
    } else {
      return { success: false, message: e.response.data.message };
    }
  }
}
export async function getBlogs(page, limit = 4) {
  try {
    const { data } = await axios.get("/blogs", {
      params: { page, limit },
    });
    return data;
  } catch (e) {
    if (!e.response) {
      return { success: false, message: "Connection Error" };
    } else {
      return { success: false, message: "Something wrong!" };
    }
  }
}

export async function getBlogById(id) {
  try {
    const { data } = await axios.get(`/blogs/${id}`);
    return data;
  } catch (e) {
    if (!e.response) {
      return { success: false, message: "Connection Error" };
    } else {
      return { success: false, message: "There is no blog with this Id!" };
    }
  }
}
export async function getProductById(id) {
  try {
    const { data } = await axios.get(`/products/${id}`);
    return data;
  } catch (e) {
    if (!e.response) {
      return { success: false, code: 500, message: "Connection Error" };
    } else {
      return {
        success: false,
        code: 404,
        message: "There is no Product with this Id!",
      };
    }
  }
}
export async function getCategoryById(id) {
  try {
    const { data } = await axios.get(`/categories/${id}`);
    return data;
  } catch (e) {
    if (!e.response) {
      return { success: false, message: "Connection Error" };
    } else {
      return { success: false, message: "There is no category with this Id!" };
    }
  }
}
export async function getUserById(id) {
  try {
    const { data } = await axios.get(`/users/${id}`);
    return data;
  } catch (e) {
    if (!e.response) {
      return { success: false, message: "Connection Error" };
    } else {
      return { success: false, message: "There is no user with this Id!" };
    }
  }
}

export async function updateCategory(info, id) {
  const config = getToken();
  try {
    const { data } = await axios.put(`/categories/${id}`, info, config);
    return data;
  } catch (e) {
    if (!e.response) {
      return { success: false, message: "Connection Error" };
    } else {
      return { success: false, message: "There is no category with this Id!" };
    }
  }
}
export async function updateUser(
  id,
  firstname,
  lastname,
  password = "",
  role = ""
) {
  try {
    const { data } = await authAxios.put(`/users/${id}`, {
      firstname,
      lastname,
      password,
      role,
    });
    return data;
  } catch (e) {
    if (!e.response) {
      return { success: false, message: "Connection Error" };
    } else {
      return { success: false, message: "There is no user with this Id!" };
    }
  }
}
export async function updateProduct(id, productData) {
  try {
    const { data } = await authAxios.put("/products/" + id, productData);
    return data;
  } catch (e) {
    return getError(e);
  }
}
export async function updateBlog(id, blogData) {
  try {
    const { data } = await authAxios.put("/blogs/" + id, blogData);
    return data;
  } catch (e) {
    return getError(e);
  }
}
export async function createProduct(product) {
  try {
    const { data } = await authAxios.post("/products", product);
    return data;
  } catch (e) {
    // if (!e.response) {
    //   return { success: false, message: "Connection Error" };
    // } else {
    //   return { success: false, message: e.response.data.message };
    // }
    getError(e);
  }
}
export async function createBlog(blog) {
  try {
    const { data } = await authAxios.post("/blogs", blog);
    return data;
  } catch (e) {
    if (!e.response) {
      return { success: false, message: "Connection Error" };
    } else {
      return { success: false, message: e.response.data.message };
    }
  }
}
export async function createCategory(info) {
  try {
    const { data } = await authAxios.post("/categories", info);
    return data;
  } catch (e) {
    if (!e.response) {
      return { success: false, message: "Connection Error" };
    } else {
      console.log(e.response.data.message);
      return { success: false, message: "This slug  has already selected!" };
    }
  }
}

export async function deleteCategory(id) {
  const config = getToken();
  try {
    const { data } = await axios.delete(`/categories/${id}`, config);
    return data;
  } catch (e) {
    if (!e.response) {
      return { success: false, message: "Connection Error" };
    } else {
      return {
        success: false,
        code: e.response.data.code,
      };
    }
  }
}
export async function removeUserById(id) {
  const config = getToken();
  try {
    const { data } = await axios.delete(`/users/${id}`, config);
    return data;
  } catch (e) {
    if (!e.response) {
      return { success: false, message: "Connection Error" };
    } else {
      return { success: false, code: e.response.data.code };
    }
  }
}
export async function removeProductById(id) {
  const config = getToken();
  try {
    const { data } = await axios.delete(`/products/${id}`, config);
    return data;
  } catch (e) {
    if (!e.response) {
      return { success: false, message: "Connection Error" };
    } else {
      return { success: false, message: e.response.data.message };
    }
  }
}
export async function removeBlogById(id) {
  try {
    const { data } = await authAxios.delete(`/blogs/${id}`);
    return data;
  } catch (e) {
    if (!e.response) {
      return { success: false, message: "Connection Error" };
    } else {
      return { success: false, code: e.response.data.code };
    }
  }
}

export async function uploadFile(file) {
  try {
    const form = new FormData();
    form.append("file", file);
    const { data } = await authAxios.post("/upload", form);
    return data;
  } catch (e) {
    return {
      success: false,
      code: e.response.data.code,
      message: e.response.data.message,
    };
  }
}

function getToken() {
  const config = {};
  if (localStorage.token || sessionStorage.token) {
    const token = localStorage.token || sessionStorage.token;
    config.headers = { Authorization: "Bearer " + token };
    return config;
  }
}

function getError(e) {
  if (!e.response) {
    return { success: false, message: "Connection Error" };
  } else {
    return { success: false, message: e.response.data.message };
  }
}
