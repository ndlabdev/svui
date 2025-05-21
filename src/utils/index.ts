export function reactivePick<T extends object, K extends keyof T>(object: T, keys: K[]): Pick<T, K> {
	const picked: Partial<T> = {}

	keys.forEach((key) => {
		if (key in object) {
			picked[key] = object[key]
		}
	})

	return picked as Pick<T, K>
}