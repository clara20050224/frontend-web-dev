import React, { useState } from 'react';

const SistemEvaluasiCPL = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  
  // Sample data
  const stats = {
    totalCP: 11,
    mataKuliah: 8,
    profilLulusan: 1,
    rataRataCPL: 83.2
  };

  const capaianPembelajaran = [
    { id: 'CP1', type: 'Sikap', name: 'CP (Sikap)', codes: ['CP 1', 'CP 2'] },
    { id: 'CP2', type: 'Pengetahuan', name: 'CP (Pengetahuan)', codes: ['CP 3', 'CP 4'] },
    { id: 'CP3', type: 'Umum', name: 'CP (Keterampilan Umum)', codes: ['CP5', 'CP6'] },
    { id: 'CP4', type: 'Khusus', name: 'CP (Keterampilan Khusus)', codes: ['CP7', 'CP8', 'CP9', 'CP10', 'CP11'] }
  ];

  const mataKuliah = [
    'Geologi Dasar', 'Mineralogi', 'Petrologi', 'Geologi Struktur',
    'Geofisika', 'Hidrogeologi', 'Geologi Lingkungan', 'Skripsi'
  ];

  const spiderData = [
    { label: 'Sikap', value: 85 },
    { label: 'Pengetahuan', value: 78 },
    { label: 'Keterampilan Umum', value: 82 },
    { label: 'Keterampilan Khusus', value: 88 }
  ];

  // Simple Icons (using Unicode symbols)
  const Icons = {
    dashboard: '📊',
    target: '🎯', 
    eye: '👁️',
    edit: '✏️',
    book: '📚',
    users: '👥',
    chart: '📈'
  };

  const Dashboard = () => (
    <div style={{ padding: '20px' }}>
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
        gap: '20px',
        marginBottom: '30px'
      }}>
        <div style={{
          backgroundColor: 'white',
          borderRadius: '8px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
          padding: '20px',
          textAlign: 'center'
        }}>
          <div style={{ fontSize: '24px', marginBottom: '10px' }}>{Icons.target}</div>
          <div style={{ fontSize: '12px', color: '#666', marginBottom: '5px' }}>Total CP</div>
          <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#3b82f6' }}>{stats.totalCP}</div>
        </div>
        
        <div style={{
          backgroundColor: 'white',
          borderRadius: '8px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
          padding: '20px',
          textAlign: 'center'
        }}>
          <div style={{ fontSize: '24px', marginBottom: '10px' }}>{Icons.book}</div>
          <div style={{ fontSize: '12px', color: '#666', marginBottom: '5px' }}>Mata Kuliah</div>
          <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#10b981' }}>{stats.mataKuliah}</div>
        </div>
        
        <div style={{
          backgroundColor: 'white',
          borderRadius: '8px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
          padding: '20px',
          textAlign: 'center'
        }}>
          <div style={{ fontSize: '24px', marginBottom: '10px' }}>{Icons.users}</div>
          <div style={{ fontSize: '12px', color: '#666', marginBottom: '5px' }}>Profil Lulusan</div>
          <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#8b5cf6' }}>{stats.profilLulusan}</div>
        </div>
        
        <div style={{
          backgroundColor: 'white',
          borderRadius: '8px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
          padding: '20px',
          textAlign: 'center'
        }}>
          <div style={{ fontSize: '24px', marginBottom: '10px' }}>{Icons.chart}</div>
          <div style={{ fontSize: '12px', color: '#666', marginBottom: '5px' }}>Rata-rata CPL</div>
          <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#f59e0b' }}>{stats.rataRataCPL}</div>
        </div>
      </div>
    </div>
  );

  const CPLMapping = () => (
    <div style={{ padding: '20px' }}>
      <div style={{
        backgroundColor: 'white',
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        padding: '20px'
      }}>
        <h3 style={{ marginBottom: '20px', fontSize: '18px', fontWeight: 'bold' }}>
          Peta Capaian Pembelajaran Lulusan
        </h3>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          {/* Profil Lulusan Header */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
            <div style={{
              width: '120px',
              backgroundColor: '#f3f4f6',
              borderRadius: '6px',
              padding: '10px',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '20px', marginBottom: '5px' }}>{Icons.users}</div>
              <div style={{ fontSize: '12px', fontWeight: '600' }}>Profil Lulusan</div>
              <div style={{ fontSize: '10px', color: '#666' }}>PPM</div>
            </div>
            
            <div style={{ flex: 1 }}>
              {capaianPembelajaran.map((cp, index) => (
                <div key={cp.id} style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '10px', 
                  marginBottom: '10px',
                  padding: '10px',
                  backgroundColor: '#f9fafb',
                  borderRadius: '6px'
                }}>
                  <div style={{
                    width: '100px',
                    backgroundColor: getColorForType(cp.type),
                    color: 'white',
                    borderRadius: '4px',
                    padding: '8px',
                    textAlign: 'center'
                  }}>
                    <div style={{ fontSize: '10px', fontWeight: '600' }}>{cp.type}</div>
                    <div style={{ fontSize: '9px' }}>{cp.codes.join(', ')}</div>
                  </div>
                  
                  <div style={{ 
                    flex: 1, 
                    display: 'grid', 
                    gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', 
                    gap: '8px' 
                  }}>
                    {mataKuliah.slice(0, 4).map((mk, mkIndex) => (
                      <div key={mkIndex} style={{
                        backgroundColor: '#dbeafe',
                        border: '1px solid #bfdbfe',
                        borderRadius: '4px',
                        padding: '8px',
                        textAlign: 'center'
                      }}>
                        <div style={{ fontSize: '16px', marginBottom: '4px' }}>{Icons.target}</div>
                        <div style={{ fontSize: '10px', fontWeight: '600' }}>Mata Kuliah</div>
                        <div style={{ fontSize: '9px', color: '#666' }}>{mk}</div>
                      </div>
                    ))}
                  </div>
                  
                  <div style={{
                    width: '120px',
                    backgroundColor: '#f9fafb',
                    border: '1px solid #e5e7eb',
                    borderRadius: '4px',
                    padding: '8px'
                  }}>
                    <div style={{ fontSize: '10px', fontWeight: '600' }}>CPMK 1: Bobot</div>
                    <div style={{ fontSize: '10px', fontWeight: '600' }}>CPMK 2: Bobot</div>
                    <div style={{ fontSize: '9px', color: '#666' }}>Metode Asesmen</div>
                    <div style={{ fontSize: '9px', color: '#666' }}>Komponen Nilai</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const getColorForType = (type) => {
    const colors = {
      'Sikap': '#3b82f6',
      'Pengetahuan': '#10b981',
      'Umum': '#8b5cf6',
      'Khusus': '#f59e0b'
    };
    return colors[type] || '#6b7280';
  };

  const SpiderChart = () => {
    return (
      <div style={{ padding: '20px' }}>
        <div style={{
          backgroundColor: 'white',
          borderRadius: '8px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
          padding: '20px'
        }}>
          <h3 style={{ marginBottom: '20px', fontSize: '18px', fontWeight: 'bold' }}>
            Kualifikasi CPL - Spider Web
          </h3>
          
          <div style={{ textAlign: 'center', marginBottom: '20px' }}>
            <svg width="300" height="300" style={{ border: '1px solid #e5e7eb', borderRadius: '8px' }}>
              {/* Simple pentagon outline */}
              <polygon
                points="150,50 250,120 220,220 80,220 50,120"
                fill="none"
                stroke="#e5e7eb"
                strokeWidth="2"
              />
              
              {/* Grid lines */}
              <line x1="150" y1="150" x2="150" y2="50" stroke="#e5e7eb" strokeWidth="1" />
              <line x1="150" y1="150" x2="250" y2="120" stroke="#e5e7eb" strokeWidth="1" />
              <line x1="150" y1="150" x2="220" y2="220" stroke="#e5e7eb" strokeWidth="1" />
              <line x1="150" y1="150" x2="80" y2="220" stroke="#e5e7eb" strokeWidth="1" />
              <line x1="150" y1="150" x2="50" y2="120" stroke="#e5e7eb" strokeWidth="1" />
              
              {/* Data polygon (simplified) */}
              <polygon
                points="150,80 220,130 200,190 100,190 80,130"
                fill="rgba(59, 130, 246, 0.3)"
                stroke="#3b82f6"
                strokeWidth="2"
              />
              
              {/* Labels */}
              <text x="150" y="40" textAnchor="middle" fontSize="12" fill="#374151">Sikap: 85</text>
              <text x="260" y="125" textAnchor="start" fontSize="12" fill="#374151">Pengetahuan: 78</text>
              <text x="225" y="240" textAnchor="middle" fontSize="12" fill="#374151">Umum: 82</text>
              <text x="75" y="240" textAnchor="middle" fontSize="12" fill="#374151">Khusus: 88</text>
              <text x="40" y="125" textAnchor="end" fontSize="12" fill="#374151">Overall</text>
            </svg>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px' }}>
            {spiderData.map((item, index) => (
              <div key={index} style={{
                display: 'flex',
                justifyContent: 'space-between',
                padding: '8px',
                backgroundColor: '#f9fafb',
                borderRadius: '4px'
              }}>
                <span style={{ fontSize: '14px' }}>{item.label}</span>
                <span style={{ fontSize: '14px', fontWeight: 'bold', color: '#3b82f6' }}>{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  const EvaluasiPanel = () => (
    <div style={{ padding: '20px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
        <div style={{
          backgroundColor: 'white',
          borderRadius: '8px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
          padding: '20px'
        }}>
          <h3 style={{ marginBottom: '15px', fontSize: '16px', fontWeight: 'bold' }}>Nilai CPMK</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '10px',
              backgroundColor: '#f9fafb',
              borderRadius: '4px'
            }}>
              <span style={{ fontWeight: '600' }}>CPMK 1</span>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ fontSize: '12px', color: '#666' }}>Bobot: 0.3</span>
                <span style={{ fontWeight: 'bold', color: '#10b981' }}>85</span>
              </div>
            </div>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '10px',
              backgroundColor: '#f9fafb',
              borderRadius: '4px'
            }}>
              <span style={{ fontWeight: '600' }}>CPMK 2</span>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ fontSize: '12px', color: '#666' }}>Bobot: 0.7</span>
                <span style={{ fontWeight: 'bold', color: '#3b82f6' }}>78</span>
              </div>
            </div>
          </div>
        </div>

        <div style={{
          backgroundColor: 'white',
          borderRadius: '8px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
          padding: '20px'
        }}>
          <h3 style={{ marginBottom: '15px', fontSize: '16px', fontWeight: 'bold' }}>Komponen Penilaian</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {[
              ['Quiz', '20%'],
              ['Proyek', '30%'],
              ['Presentasi', '20%'],
              ['UTS', '15%'],
              ['UAS', '15%']
            ].map(([name, percentage], index) => (
              <div key={index} style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}>
                <span style={{ fontSize: '14px' }}>{name}:</span>
                <span style={{ fontSize: '14px', fontWeight: '600' }}>{percentage}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f3f4f6' }}>
      {/* Header */}
      <div style={{
        backgroundColor: '#1e40af',
        color: 'white',
        padding: '20px'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
            <div style={{
              backgroundColor: '#f59e0b',
              borderRadius: '8px',
              padding: '8px',
              fontSize: '24px'
            }}>
              {Icons.target}
            </div>
            <div>
              <h1 style={{ fontSize: '24px', fontWeight: 'bold', margin: '0 0 5px 0' }}>
                Peta Sistem Evaluasi Capaian Pembelajaran Lulusan
              </h1>
              <p style={{ color: '#bfdbfe', margin: '0' }}>Prodi Teknik Geologi</p>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div style={{
        backgroundColor: 'white',
        boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <nav style={{ display: 'flex', gap: '30px' }}>
            {[
              { id: 'dashboard', name: 'Dashboard', icon: Icons.dashboard },
              { id: 'mapping', name: 'Peta CPL', icon: Icons.target },
              { id: 'spider', name: 'Kualifikasi', icon: Icons.eye },
              { id: 'evaluasi', name: 'Evaluasi', icon: Icons.edit }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '15px 8px',
                  border: 'none',
                  borderBottom: activeTab === tab.id ? '2px solid #3b82f6' : '2px solid transparent',
                  backgroundColor: 'transparent',
                  color: activeTab === tab.id ? '#3b82f6' : '#6b7280',
                  fontWeight: '600',
                  fontSize: '14px',
                  cursor: 'pointer',
                  transition: 'all 0.2s'
                }}
                onMouseOver={(e) => {
                  if (activeTab !== tab.id) {
                    e.target.style.color = '#374151';
                  }
                }}
                onMouseOut={(e) => {
                  if (activeTab !== tab.id) {
                    e.target.style.color = '#6b7280';
                  }
                }}
              >
                <span style={{ fontSize: '16px' }}>{tab.icon}</span>
                <span>{tab.name}</span>
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {activeTab === 'dashboard' && <Dashboard />}
        {activeTab === 'mapping' && <CPLMapping />}
        {activeTab === 'spider' && <SpiderChart />}
        {activeTab === 'evaluasi' && <EvaluasiPanel />}
      </div>
    </div>
  );
};

export default SistemEvaluasiCPL;