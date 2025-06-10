import React from "react";

export default function Pay() {
    return (
        <div>
            <h2>תשלום</h2>
            <p>נא להוסיף פרטי תשלום כאן.</p>
            {/* כאן ניתן להוסיף טופס תשלום */}
            <form>
                <label>
                    מספר כרטיס אשראי:
                    <input type="text" name="cardNumber" required />
                </label>
                <label>
                    תאריך תפוגה:
                    <input type="month" name="expiryDate" required />
                </label>
                <label>
                    קוד אבטחה:
                    <input type="text" name="cvv" required />
                </label>
                <button type="submit">שלח</button>
            </form>
        </div>
    );
}