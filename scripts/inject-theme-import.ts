import fs from 'fs'
import path from 'path'

const appCssPath = path.resolve(process.cwd(), 'src/app.css')
const importLine = `@import './generated/theme.css';`

// 1. Kiểm tra file app.css có tồn tại không
if (!fs.existsSync(appCssPath)) {
	console.warn('[svui] ⚠️ Không tìm thấy src/app.css — bỏ qua inject.')
	process.exit(0)
}

// 2. Đọc nội dung app.css
const content = fs.readFileSync(appCssPath, 'utf8')

// 3. Nếu đã có dòng import, bỏ qua
if (content.includes(importLine)) {
	console.log('[svui] ✅ app.css đã có import theme.css')
} else {
	fs.appendFileSync(appCssPath, `\n${importLine}\n`)
	console.log('[svui] ✅ Đã thêm dòng import vào app.css')
}
