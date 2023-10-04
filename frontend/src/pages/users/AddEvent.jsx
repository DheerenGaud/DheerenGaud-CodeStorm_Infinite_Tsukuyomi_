export default function AddEvent(props){
    return(
        <>
            <form action="">
                <div className="py-12 px-32">
                    <div className="flex justify-between">
                        <div>
                            <div className="text-3xl font-bold ">
                                Add An Event
                            </div>
                            <div className="flex">
                                <div className="[&>*]:py-4 [&>*]:w-96 text-xl  ">
                                    <div >
                                        <label
                                            htmlFor="Name"
                                            className="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
                                        >
                                            <input
                                                type="text"
                                                id="Name"
                                                className="peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 px-4 py-2 w-full text-base"
                                                placeholder="Name"
                                                
                                            />

                                            <span
                                                className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs"
                                            >
                                                Name
                                            </span>
                                            
                                        </label>
                                    </div>
                                    <div>
                                        <label
                                                htmlFor="Date"
                                                className="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
                                            >
                                            <input
                                                type="date"
                                                id="Date"
                                                className="peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 text-base p-4 text-gray-500 w-full"
                                                placeholder="Date"
                                            />

                                            <span
                                                className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs"
                                            >
                                                Date
                                            </span>
                                        </label>
                                    </div>
                                    <div>
                                        <label
                                                htmlFor="Budget"
                                                className="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
                                            >
                                            <input
                                                type="number"
                                                id="Budget"
                                                className="peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 text-base p-4 w-full"
                                                placeholder="Budget"
                                            />

                                            <span
                                                className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs"
                                            >
                                                &#8377; Budget
                                            </span>
                                        </label>
                                    </div>
                                    <div>
                                        <label
                                                htmlFor="Requirements"
                                                className="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
                                            >
                                            <textarea 
                                                name="Requirements"
                                                id="Requirements"
                                                className="peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 text-base p-4 w-full"
                                                placeholder="Requirements"
                                            />

                                            <span
                                                className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs"
                                            >
                                                Requirements
                                            </span>
                                        </label>
                                    </div>
                                    <div>
                                        <label htmlFor="Categories" className="block text-sm font-medium text-gray-900">
                                            Event Categories
                                        </label>

                                        <select
                                            name="Categories"
                                            id="Categories"
                                            className="mt-1.5 w-full rounded-lg text-gray-700 sm:text-sm p-4 border-[#e5e7eb] border-solid border-2 bg-white"
                                        >
                                            <option value="">Please select</option>
                                            <option value="admin">Admin</option>
                                            <option value="attendee">Attendee</option>
                                            <option value="client">Client</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label
                                                htmlFor="Time"
                                                className="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
                                            >
                                            <input
                                                type="time"
                                                id="Time"
                                                className="peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 text-base p-4 w-full"
                                                placeholder="Time"
                                            />

                                            <span
                                                className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs"
                                            >
                                                Time
                                            </span>
                                        </label>
                                    </div>
                                    <div>
                                        <label
                                                htmlFor="Description"
                                                className="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
                                            >
                                            <textarea 
                                                name="Description"
                                                id="Description"
                                                className="peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 text-base p-4 w-full"
                                                placeholder="Description"
                                            />

                                            <span
                                                className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs"
                                            >
                                                Description
                                            </span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div>
                                <div className="text-3xl font-bold ">
                                    Image
                                </div>
                                <div>
                                    <input type="file" name="Image" id="Image" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>

        </>
    )
}