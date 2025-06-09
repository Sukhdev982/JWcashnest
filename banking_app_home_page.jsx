import React, { useState } from 'react';
import { Eye, EyeOff, User, CreditCard, ArrowRightLeft, FileText, HelpCircle, Mail, Users } from 'lucide-react';

const beneficiaries = [
  { name: 'Rahul Dhar', account: '144521478445201' },
  { name: 'Dazy Lucas', account: '4571147823301457' },
  { name: 'Diparnita', account: '5554712248500145' }
];

const HomePage = () => {
  const [showBalance, setShowBalance] = useState(false);
  const [showBeneficiaries, setShowBeneficiaries] = useState(false);

  const balance = 54871202;

  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      {/* Header */}
      <header className="bg-blue-900 text-white p-4 flex justify-between items-center shadow-md">
        <h1 className="text-xl font-bold">Sukhdev Mondal</h1>
        <div className="flex items-center space-x-2">
          <div className="text-lg font-semibold">JWcashnest BANK</div>
          <div className="bg-yellow-400 text-blue-900 font-bold px-2 py-1 rounded">JW</div>
        </div>
      </header>

      {/* Balance Card */}
      <div className="p-4">
        <div className="bg-white rounded-2xl shadow-md p-4 flex justify-between items-center max-w-md mx-auto">
          <div>
            <p className="text-sm text-gray-600">Account Balance</p>
            <h2 className="text-2xl font-bold text-gray-900">
              ₹ {showBalance ? balance.toLocaleString() : '**** ****'}
            </h2>
          </div>
          <button onClick={() => setShowBalance(!showBalance)} title={showBalance ? "Hide Balance" : "Show Balance"}>
            {showBalance ? <Eye size={24} /> : <EyeOff size={24} />}
          </button>
        </div>
      </div>

      {/* Main Options Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-4 max-w-4xl mx-auto">
        <Card icon={<ArrowRightLeft />} label="Transfer Money" />
        <Card icon={<CreditCard />} label="Loan & Card Offers" />
        <Card icon={<User />} label="Account Overview" onClick={() => alert(`Name: Sukhdev Mondal\nBalance: ₹${balance.toLocaleString()}`)} />
        <Card icon={<FileText />} label="Statement" onClick={() => alert('Avg. ₹65,000/month spent from 2017 to 2025')} />
        <Card icon={<Users />} label="Beneficiary Accounts" onClick={() => setShowBeneficiaries(!showBeneficiaries)} />
        <Card icon={<HelpCircle />} label="Help & Support" />
        <Card icon={<Mail />} label="Contact Us" onClick={() => alert('Email: support@jwcashnest.com')} />
      </div>

      {/* Beneficiaries */}
      {showBeneficiaries && (
        <div className="max-w-2xl mx-auto p-4">
          <h3 className="text-lg font-semibold mb-2">Saved Beneficiaries</h3>
          <ul className="bg-white rounded-xl shadow-md divide-y">
            {beneficiaries.map((b, idx) => (
              <li key={idx} className="p-3">
                <strong>{b.name}</strong> - {b.account}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

const Card = ({ icon, label, onClick }) => (
  <div
    className="bg-white rounded-2xl shadow hover:shadow-lg p-4 flex flex-col items-center justify-center cursor-pointer transition"
    onClick={onClick}
  >
    <div className="text-blue-900 mb-2">{icon}</div>
    <div className="text-sm font-medium text-gray-700 text-center">{label}</div>
  </div>
);

export default HomePage;
