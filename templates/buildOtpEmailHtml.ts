// buildOtpEmailHtml.ts
export function buildOtpEmailHTML({
                                      code,
                                      appName = "WetinHapin",
                                      expiresInMinutes = 5,
                                      logoUrl = "https://via.placeholder.com/56x56.png?text=W",
                                      year = new Date().getFullYear(),
                                      privacyUrl = "https://wetinhapin.com/privacy",
                                  }: {
    code: string;
    appName?: string;
    expiresInMinutes?: number;
    logoUrl?: string;
    year?: number;
    privacyUrl?: string;
}): string {
    return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="color-scheme" content="light only" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>${appName} verification code</title>

<style>
  /* Mobile overrides */
  @media (max-width: 480px) {
    .container { width: 100% !important; border-radius: 10px !important; }
    .px { padding-left: 16px !important; padding-right: 16px !important; }
    .py { padding-top: 18px !important; padding-bottom: 18px !important; }
    .h1 { font-size: 18px !important; line-height: 1.35 !important; margin-bottom: 10px !important; }
    .p  { font-size: 13px !important; margin: 16px 0 !important; }
    .code-label { font-size: 13px !important; margin: 8px 0 0 !important; }
    .code-box {
      font-size: 26px !important;
      letter-spacing: 4px !important;
      padding: 10px 12px !important;
      border-radius: 10px !important;
    }
    .muted { font-size: 12px !important; }
    .logo { width: 48px !important; height: 48px !important; }
  }
</style>
</head>

<body style="margin:0;background:#ffffff;color:#212121;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:#ffffff;">
    <tr>
      <td align="center" style="padding:20px;">
        <!-- Card -->
        <table role="presentation" width="560" cellspacing="0" cellpadding="0" class="container" style="max-width:560px;background:#f6f7f9;border-radius:12px;overflow:hidden;">
          <!-- Header / Logo -->
          <tr>
            <td align="center" style="background:#0f172a;padding:20px;">
              <img class="logo" src="${logoUrl}" width="56" height="56" alt="${appName} Logo" style="display:block;border:0;outline:none;text-decoration:none;border-radius:12px" />
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td class="px" style="padding:25px 35px;background:#ffffff;">
              <h1 class="h1" style="margin:0 0 12px 0;color:#111827;font-size:22px;line-height:1.3;">Verify your email address</h1>

              <p class="p" style="margin:0 0 14px 0;color:#374151;font-size:14px;line-height:1.55;">
                Use the code below to sign in to <strong>${appName}</strong>. If you didn’t request this, you can safely ignore this email.
              </p>

              <p class="p code-label" style="margin:10px 0 0 0;color:#374151;font-size:14px;line-height:1.55;text-align:center;font-weight:600;">
                Verification code
              </p>

              <div style="text-align:center;margin:8px 0 0 0;">
                <span class="code-box" style="display:inline-block;padding:12px 16px;border:1px solid #e5e7eb;border-radius:12px;font-size:34px;font-weight:800;letter-spacing:6px;color:#111827;">
                  ${code}
                </span>
              </div>

              <p class="p muted" style="margin:8px 0 0 0;color:#6b7280;font-size:13px;line-height:1.55;text-align:center;">
                (This code is valid for ${expiresInMinutes} minutes)
              </p>
            </td>
          </tr>

          <!-- Divider -->
          <tr>
            <td style="background:#ffffff;"><hr style="border:none;border-top:1px solid #e5e7eb;margin:0;" /></td>
          </tr>

          <!-- Footer note inside card -->
          <tr>
            <td class="px py" style="padding:25px 35px;background:#ffffff;">
              <p class="p muted" style="margin:0;color:#6b7280;font-size:12px;line-height:1.55;">
                ${appName} will never ask you to share your password or payment details by email.
              </p>
            </td>
          </tr>
        </table>

        <!-- Footer below card -->
        <p class="p muted" style="max-width:560px;margin:12px 0 0 0;color:#6b7280;font-size:12px;line-height:1.55;">
          © ${year} ${appName}. All rights reserved.
          <a href="${privacyUrl}" style="color:#2754C5;text-decoration:underline;">Privacy policy</a>.
        </p>
      </td>
    </tr>
  </table>
</body>
</html>`;
}