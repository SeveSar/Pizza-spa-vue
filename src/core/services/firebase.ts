import type { Cartitem } from "@/types/CartItem";
import { dbFireStore } from "../../main";
import { updateDoc, arrayUnion, setDoc, getDoc, doc } from "firebase/firestore";

interface CartRes {
  data?: Cartitem[];
}

export async function setNewUserData(email: string, userId: string) {
  await setDoc(doc(dbFireStore, "users", userId ?? ""), {
    email,
  });
  await setDoc(doc(dbFireStore, "cart", userId ?? ""), {
    data: [],
  });
}

export async function getCartUser(
  userId: string
): Promise<CartRes | undefined> {
  try {
    const docRef = doc(dbFireStore, "cart", userId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return await docSnap.data();
    }
  } catch (e) {
    return Promise.reject(e);
  }
}
export async function addtoCart(cartItem: Cartitem, userId: string) {
  const cartData = doc(dbFireStore, "cart", userId ?? "");
  return await updateDoc(cartData, {
    data: arrayUnion(cartItem),
  });
}
export async function saveCart(cart: Cartitem[], userId: string) {
  const cartData = doc(dbFireStore, "cart", userId ?? "");
  return await updateDoc(cartData, {
    data: cart,
  });
}
