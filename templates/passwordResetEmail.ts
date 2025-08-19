export interface EmailTemplate {
    subject: string
    html: string
    text: string
}

// Password reset email — identical breakpoint & typography to your OTP template
export function passwordResetEmailHtml(email: string, resetLink: string) {
    return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>Reset your password</title>
<style>
  /* Same mobile rules as OTP template */
  @media (max-width: 480px) {
    .container { width: 100% !important; border-radius: 10px !important; }
    .px { padding-left: 16px !important; padding-right: 16px !important; }
    .py { padding-top: 18px !important; padding-bottom: 18px !important; }
    .h1 { font-size: 18px !important; line-height: 1.35 !important; margin-bottom: 10px !important; }
    .p  { font-size: 13px !important; margin: 16px 0 !important; }
    .btn { padding: 12px 16px !important; font-size: 14px !important; }
    .muted { font-size: 12px !important; }
  }
</style>
</head>
<body style="margin:0;background:#ffffff;color:#212121;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:#ffffff;">
    <tr>
      <td align="center" style="padding:20px;">
        <!-- Card (same container look as OTP) -->
        <table role="presentation" width="560" cellspacing="0" cellpadding="0" class="container" style="max-width:560px;background:#f6f7f9;border-radius:12px;overflow:hidden;">
          <!-- Brand header to match OTP -->
          <tr>
            <td align="center" style="background:#0f172a;padding:20px;">
              <span style="display:inline-block;height:0;line-height:0;font-size:0;">&nbsp;</span>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td class="px" style="padding:25px 35px;background:#ffffff;">
              <h1 class="h1" style="margin:0 0 12px 0;color:#111827;font-size:22px;line-height:1.3;">Reset your password</h1>

              <p class="p" style="margin:0 0 14px 0;color:#374151;font-size:14px;line-height:1.55;">
                We received a request to reset the password for the account associated with <strong>${email}</strong>.
              </p>

              <p class="p" style="margin:0 0 18px 0;color:#374151;font-size:14px;line-height:1.55;">
                Click the button below to choose a new password:
              </p>

              <div style="text-align:center;margin:22px 0 28px;">
                <a
                  href="${resetLink}"
                  class="btn"
                  style="display:inline-block;padding:14px 22px;background:#111827;color:#ffffff;text-decoration:none;border-radius:10px;font-weight:700;font-size:15px;border:1px solid #0b1220;"
                >Reset Password</a>
              </div>

              <p class="p" style="margin:0 0 8px 0;color:#374151;font-size:14px;line-height:1.55;">
                If the button doesn’t work, copy and paste this link into your browser:
              </p>

              <p class="p" style="margin:0 0 12px 0;color:#6b7280;font-size:13px;line-height:1.55;word-break:break-word;border:1px solid #e5e7eb;border-radius:10px;padding:10px 12px;background:#f9fafb;">
                ${resetLink}
              </p>

              <p class="p" style="margin:0;color:#374151;font-size:14px;line-height:1.55;">
                <strong>This link will expire in 1 hour.</strong>
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
                If you didn’t request a password reset, you can safely ignore this email—your password will not be changed.
              </p>
            </td>
          </tr>
        </table>

        <!-- Footer below card -->
        <p class="p muted" style="max-width:560px;margin:12px 0 0 0;color:#6b7280;font-size:12px;line-height:1.55;">
          This is an automated message, please do not reply.
        </p>
      </td>
    </tr>
  </table>
</body>
</html>`;
}