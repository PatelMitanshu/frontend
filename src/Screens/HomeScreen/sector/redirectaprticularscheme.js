import React, { useEffect,useState } from 'react'
import Navigation from '../../Navigations/navigation'
import Footer from '../../footer/footer'
import './redirectaprticularscheme.css'
import { useLocation } from 'react-router-dom'
function Redirectaprticularscheme() {
 const [scheme, setScheme] = useState([]);
    const location = useLocation();
    var schemeid = location.state.message;
    useEffect(() => {
        async function fetchData() {
            const schemes_backend_url = `https://backend-wq9h.onrender.com/api/v1/users/giveaparticularscheme/${schemeid}`;
            const response = await fetch(schemes_backend_url);
            const data = await response.json();
   
            setScheme(Array.isArray(data) ? data : [data]);
            
        }
    
        fetchData();
    }, [schemeid]);

    return (
        <div>
            <Navigation />
            <div className='scheme_1_container'>
                {scheme.map((scheme) => {
                    return (
                    console.log(scheme.schemeName.schemeName),
                        <div key={scheme.id}>
                            <div className="scheme_1">
                                <div className="scheme_1_detailes">
                                    <h1 className="scheme_1_name">{scheme.schemeName.schemeName}</h1>
                                    <p className="scheme_1_inf">{scheme.QuickOverview}</p>
                                    <p className="scheme_1_inf">{scheme.Description}</p>
                                    <p className="scheme_1_inf">{scheme.Objective}</p>
                                    <p className="scheme_1_inf">{scheme.Benefits}</p>
                                    <p className="scheme_1_inf">{scheme.Eligibility}</p>
                                    <p className="scheme_1_inf">{scheme.Documents}</p>
                                    <p className="scheme_1_inf">{scheme.HowToApply}</p>
                                </div>
                            </div>
                        </div>
                    );
                }
                )}
            </div>
            <Footer />
        </div>
    );
}

export default Redirectaprticularscheme;