import { DASHBOARD_URL } from "../constants";

export const passwordResetTranslations = {
  en: {
    subject: "Reset Your Password",
    preview: "Reset your password",
    heading: "Password Reset Request",
    intro: "We received a request to reset your password. Click the button below to create a new password:",
    button: {
      text: "Reset Password",
      link: `${DASHBOARD_URL}/reset-password`,
    },
    warning: "If you didn't request this, you can safely ignore this email. Your password won't be changed.",
    expiry: "This link will expire in 24 hours for security reasons.",
  },

  zh: {
    subject: "重置您的密码",
    preview: "重置您的密码",
    heading: "密码重置请求",
    intro: "我们收到了重置您密码的请求。点击下面的按钮创建新密码：",
    button: {
      text: "重置密码",
      link: `${DASHBOARD_URL}/reset-password`,
    },
    warning: "如果您没有请求此操作，可以安全地忽略此邮件。您的密码不会被更改。",
    expiry: "出于安全原因，此链接将在24小时内过期。",
  },

  hi: {
    subject: "अपना पासवर्ड रीसेट करें",
    preview: "अपना पासवर्ड रीसेट करें",
    heading: "पासवर्ड रीसेट अनुरोध",
    intro: "हमें आपका पासवर्ड रीसेट करने का अनुरोध मिला है। नया पासवर्ड बनाने के लिए नीचे बटन पर क्लिक करें:",
    button: {
      text: "पासवर्ड रीसेट करें",
      link: `${DASHBOARD_URL}/reset-password`,
    },
    warning: "यदि आपने यह अनुरोध नहीं किया है, तो आप इस ईमेल को सुरक्षित रूप से अनदेखा कर सकते हैं। आपका पासवर्ड नहीं बदला जाएगा।",
    expiry: "सुरक्षा कारणों से यह लिंक 24 घंटे में समाप्त हो जाएगा।",
  },

  ar: {
    subject: "إعادة تعيين كلمة المرور",
    preview: "إعادة تعيين كلمة المرور",
    heading: "طلب إعادة تعيين كلمة المرور",
    intro: "تلقينا طلبًا لإعادة تعيين كلمة المرور الخاصة بك. انقر على الزر أدناه لإنشاء كلمة مرور جديدة:",
    button: {
      text: "إعادة تعيين كلمة المرور",
      link: `${DASHBOARD_URL}/reset-password`,
    },
    warning: "إذا لم تطلب ذلك، يمكنك تجاهل هذا البريد الإلكتروني بأمان. لن يتم تغيير كلمة المرور الخاصة بك.",
    expiry: "ستنتهي صلاحية هذا الرابط خلال 24 ساعة لأسباب أمنية.",
  },

  bn: {
    subject: "আপনার পাসওয়ার্ড রিসেট করুন",
    preview: "আপনার পাসওয়ার্ড রিসেট করুন",
    heading: "পাসওয়ার্ড রিসেট অনুরোধ",
    intro: "আমরা আপনার পাসওয়ার্ড রিসেট করার অনুরোধ পেয়েছি। নতুন পাসওয়ার্ড তৈরি করতে নিচের বাটনে ক্লিক করুন:",
    button: {
      text: "পাসওয়ার্ড রিসেট করুন",
      link: `${DASHBOARD_URL}/reset-password`,
    },
    warning: "আপনি যদি এটি অনুরোধ না করে থাকেন, তাহলে আপনি নিরাপদে এই ইমেইলটি উপেক্ষা করতে পারেন। আপনার পাসওয়ার্ড পরিবর্তন হবে না।",
    expiry: "নিরাপত্তার কারণে এই লিঙ্কটি ২৪ ঘন্টার মধ্যে মেয়াদ শেষ হয়ে যাবে।",
  },

  pt: {
    subject: "Redefinir sua senha",
    preview: "Redefina sua senha",
    heading: "Solicitação de redefinição de senha",
    intro: "Recebemos uma solicitação para redefinir sua senha. Clique no botão abaixo para criar uma nova senha:",
    button: {
      text: "Redefinir senha",
      link: `${DASHBOARD_URL}/reset-password`,
    },
    warning: "Se você não solicitou isso, pode ignorar este e-mail com segurança. Sua senha não será alterada.",
    expiry: "Este link expirará em 24 horas por motivos de segurança.",
  },

  ru: {
    subject: "Сброс пароля",
    preview: "Сбросьте ваш пароль",
    heading: "Запрос на сброс пароля",
    intro: "Мы получили запрос на сброс вашего пароля. Нажмите кнопку ниже, чтобы создать новый пароль:",
    button: {
      text: "Сбросить пароль",
      link: `${DASHBOARD_URL}/reset-password`,
    },
    warning: "Если вы не запрашивали это, вы можете безопасно проигнорировать это письмо. Ваш пароль не будет изменен.",
    expiry: "Эта ссылка истечет через 24 часа по соображениям безопасности.",
  },

  ja: {
    subject: "パスワードのリセット",
    preview: "パスワードをリセット",
    heading: "パスワードリセットのリクエスト",
    intro: "パスワードをリセットするリクエストを受け取りました。新しいパスワードを作成するには、下のボタンをクリックしてください：",
    button: {
      text: "パスワードをリセット",
      link: `${DASHBOARD_URL}/reset-password`,
    },
    warning: "これをリクエストしていない場合は、このメールを安全に無視できます。パスワードは変更されません。",
    expiry: "セキュリティ上の理由から、このリンクは24時間で期限切れになります。",
  },

  tr: {
    subject: "Şifrenizi Sıfırlayın",
    preview: "Şifrenizi sıfırlayın",
    heading: "Şifre Sıfırlama Talebi",
    intro: "Şifrenizi sıfırlama talebinizi aldık. Yeni bir şifre oluşturmak için aşağıdaki düğmeye tıklayın:",
    button: {
      text: "Şifreyi Sıfırla",
      link: `${DASHBOARD_URL}/reset-password`,
    },
    warning: "Bunu siz talep etmediyseniz, bu e-postayı güvenle yok sayabilirsiniz. Şifreniz değiştirilmeyecek.",
    expiry: "Bu bağlantı güvenlik nedenleriyle 24 saat içinde sona erecek.",
  },

  ko: {
    subject: "비밀번호 재설정",
    preview: "비밀번호를 재설정하세요",
    heading: "비밀번호 재설정 요청",
    intro: "비밀번호 재설정 요청을 받았습니다. 새 비밀번호를 만들려면 아래 버튼을 클릭하세요:",
    button: {
      text: "비밀번호 재설정",
      link: `${DASHBOARD_URL}/reset-password`,
    },
    warning: "이 요청을 하지 않으셨다면 이 이메일을 안전하게 무시하실 수 있습니다. 비밀번호는 변경되지 않습니다.",
    expiry: "보안상의 이유로 이 링크는 24시간 후에 만료됩니다.",
  },

  fr: {
    subject: "Réinitialiser votre mot de passe",
    preview: "Réinitialisez votre mot de passe",
    heading: "Demande de réinitialisation du mot de passe",
    intro: "Nous avons reçu une demande de réinitialisation de votre mot de passe. Cliquez sur le bouton ci-dessous pour créer un nouveau mot de passe :",
    button: {
      text: "Réinitialiser le mot de passe",
      link: `${DASHBOARD_URL}/reset-password`,
    },
    warning: "Si vous n'avez pas demandé cela, vous pouvez ignorer cet e-mail en toute sécurité. Votre mot de passe ne sera pas modifié.",
    expiry: "Ce lien expirera dans 24 heures pour des raisons de sécurité.",
  },

  de: {
    subject: "Passwort zurücksetzen",
    preview: "Setzen Sie Ihr Passwort zurück",
    heading: "Passwort-Zurücksetzungsanfrage",
    intro: "Wir haben eine Anfrage zum Zurücksetzen Ihres Passworts erhalten. Klicken Sie auf die Schaltfläche unten, um ein neues Passwort zu erstellen:",
    button: {
      text: "Passwort zurücksetzen",
      link: `${DASHBOARD_URL}/reset-password`,
    },
    warning: "Wenn Sie dies nicht angefordert haben, können Sie diese E-Mail sicher ignorieren. Ihr Passwort wird nicht geändert.",
    expiry: "Dieser Link läuft aus Sicherheitsgründen in 24 Stunden ab.",
  },

  vi: {
    subject: "Đặt lại mật khẩu",
    preview: "Đặt lại mật khẩu của bạn",
    heading: "Yêu cầu đặt lại mật khẩu",
    intro: "Chúng tôi đã nhận được yêu cầu đặt lại mật khẩu của bạn. Nhấp vào nút bên dưới để tạo mật khẩu mới:",
    button: {
      text: "Đặt lại mật khẩu",
      link: `${DASHBOARD_URL}/reset-password`,
    },
    warning: "Nếu bạn không yêu cầu điều này, bạn có thể bỏ qua email này một cách an toàn. Mật khẩu của bạn sẽ không bị thay đổi.",
    expiry: "Liên kết này sẽ hết hạn sau 24 giờ vì lý do bảo mật.",
  },

  ta: {
    subject: "உங்கள் கடவுச்சொல்லை மீட்டமைக்கவும்",
    preview: "உங்கள் கடவுச்சொல்லை மீட்டமைக்கவும்",
    heading: "கடவுச்சொல் மீட்டமைப்பு கோரிக்கை",
    intro: "உங்கள் கடவுச்சொல்லை மீட்டமைக்க கோரிக்கை பெற்றுள்ளோம். புதிய கடவுச்சொல்லை உருவாக்க கீழே உள்ள பொத்தானை கிளிக் செய்யவும்:",
    button: {
      text: "கடவுச்சொல்லை மீட்டமை",
      link: `${DASHBOARD_URL}/reset-password`,
    },
    warning: "நீங்கள் இதை கோரவில்லை என்றால், இந்த மின்னஞ்சலை பாதுகாப்பாக புறக்கணிக்கலாம். உங்கள் கடவுச்சொல் மாற்றப்படாது.",
    expiry: "பாதுகாப்பு காரணங்களுக்காக இந்த இணைப்பு 24 மணி நேரத்தில் காலாவதியாகும்.",
  },

  it: {
    subject: "Reimposta la tua password",
    preview: "Reimposta la tua password",
    heading: "Richiesta di reimpostazione password",
    intro: "Abbiamo ricevuto una richiesta per reimpostare la tua password. Clicca sul pulsante qui sotto per creare una nuova password:",
    button: {
      text: "Reimposta password",
      link: `${DASHBOARD_URL}/reset-password`,
    },
    warning: "Se non hai richiesto tu questo, puoi ignorare questa email in sicurezza. La tua password non verrà modificata.",
    expiry: "Questo link scadrà tra 24 ore per motivi di sicurezza.",
  },

  th: {
    subject: "รีเซ็ตรหัสผ่านของคุณ",
    preview: "รีเซ็ตรหัสผ่านของคุณ",
    heading: "คำขอรีเซ็ตรหัสผ่าน",
    intro: "เราได้รับคำขอให้รีเซ็ตรหัสผ่านของคุณ คลิกปุ่มด้านล่างเพื่อสร้างรหัสผ่านใหม่:",
    button: {
      text: "รีเซ็ตรหัสผ่าน",
      link: `${DASHBOARD_URL}/reset-password`,
    },
    warning: "หากคุณไม่ได้ขอสิ่งนี้ คุณสามารถเพิกเฉยอีเมลนี้ได้อย่างปลอดภัย รหัสผ่านของคุณจะไม่ถูกเปลี่ยน",
    expiry: "ลิงก์นี้จะหมดอายุใน 24 ชั่วโมงด้วยเหตุผลด้านความปลอดภัย",
  },
};