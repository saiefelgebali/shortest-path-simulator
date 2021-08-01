export class InMemoryKeyValueStore<K, V> {
	protected store: { key: K; value: V }[] = [];

	/**
	 * If keys and defaultValue params passed,
	 * map each key to default value in store.
	 */
	constructor(initialStore?: { keys: K[]; defaultValue: V }) {
		if (!initialStore) return;
		const { keys, defaultValue } = initialStore;
		this.store = keys.map((key) => ({ key, value: defaultValue }));
	}

	private getStoreObject(key: K) {
		const object = this.store.find((obj) => obj.key === key);
		if (!object) console.error("Invalid Key:", key);
		return object;
	}

	public get(key: K) {
		const object = this.getStoreObject(key);
		return object?.value;
	}

	public set(key: K, value: V) {
		const object = this.getStoreObject(key);
		if (!object) return;
		object.value = value;
	}
}
