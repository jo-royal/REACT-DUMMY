import React from 'react'

export default function SizeGuide() {
    return (
        <div className="w-full overflow-x-auto pb-15  p-4 bg-white border-b-4 border-bg-shop">
            <h2 className="text-lg md:text-xl font-semibold mb-4 text-center">Size Guide</h2>

            <table className="w-full text-sm md:text-base table-auto border-collapse">
                <thead>
                    <tr className="bg-gray-100">
                        <th className="border p-2">Size</th>
                        <th className="border p-2">Chest (inches)</th>
                        <th className="border p-2">Waist (inches)</th>
                        <th className="border p-2">Length (inches)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="text-center">
                        <td className="border p-2">S</td>
                        <td className="border p-2">34 - 36</td>
                        <td className="border p-2">28 - 30</td>
                        <td className="border p-2">26</td>
                    </tr>
                    <tr className="text-center">
                        <td className="border p-2">M</td>
                        <td className="border p-2">38 - 40</td>
                        <td className="border p-2">32 - 34</td>
                        <td className="border p-2">27</td>
                    </tr>
                    <tr className="text-center">
                        <td className="border p-2">L</td>
                        <td className="border p-2">42 - 44</td>
                        <td className="border p-2">36 - 38</td>
                        <td className="border p-2">28</td>
                    </tr>
                    <tr className="text-center">
                        <td className="border p-2">XL</td>
                        <td className="border p-2">46 - 48</td>
                        <td className="border p-2">40 - 42</td>
                        <td className="border p-2">29</td>
                    </tr>
                </tbody>
            </table>

            <p className="text-xs text-gray-500 mt-3 text-center">
                * Measurements are approximate and may vary slightly between products.
            </p>
        </div>

    )
}
