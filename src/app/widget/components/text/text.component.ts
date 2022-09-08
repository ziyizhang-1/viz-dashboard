import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-text",
  templateUrl: "./text.component.html",
  styleUrls: ["./text.component.scss"]
})
export class TextComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    document.getElementById("log").textContent = log
  }
}

var log = `2022-09-02 02:11:16,823 be9fa42c6a9b MainThread pkb.py:1572 INFO     PerfKitBenchmarker version: unknown
2022-09-02 02:11:16,824 be9fa42c6a9b MainThread pkb.py:1546 INFO     Flag values:
--temp_dir=/tmp/pkb
--benchmark_config_file=/home/cumulus-config.yaml.mod.yaml
--skopeo_insecure_registries=10.165.31.58:5000,harbor-npg.pact.intel.com,r49s04.gv.intel.com:10443,r18s05.gv.intel.com:10443,10.219.170.195:5000,10.54.45.149:10443,amr-registry.caas.intel.com,10.239.241.58:5000,ad09-28-wcp-storage.jf.intel.com:5000,marceline.zpn.intel.com,vcaa-jf5-lab-1.jf.intel.com:10443,dcsorepo.jf.intel.com,jf3jd011.jf.intel.com:5000,r49s04.gv.intel.com,0.0.0.0,0.0.0.0:5000,10.166.44.134:5000,10.219.170.133:5000
--dpt_reuse_sut
--sar
--sar_interval=1
--benchmarks=docker_pt
--run_uri=be9fa42c6a9b
--owner=sf-ai-ziyi
--noinstall_packages
--ignore_package_requirements
--run_stage_iterations=1
--trace_allow_benchmark_control
2022-09-02 02:11:16,827 be9fa42c6a9b MainThread vm_util.py:363 INFO     Running: ssh-keygen -t rsa -N  -m PEM -q -f /tmp/pkb/runs/be9fa42c6a9b/perfkitbenchmarker_keyfile
2022-09-02 02:11:17,457 be9fa42c6a9b MainThread vm_util.py:426 DEBUG    Ran: {ssh-keygen -t rsa -N  -m PEM -q -f /tmp/pkb/runs/be9fa42c6a9b/perfkitbenchmarker_keyfile}
ReturnCode:0
STDOUT: 
STDERR: 
2022-09-02 02:11:17,457 be9fa42c6a9b MainThread svrinfo.py:117 INFO     Registering svr_info collector to run after PREPARE phase.
2022-09-02 02:11:17,458 be9fa42c6a9b MainThread sar.py:146 DEBUG    Registering sar collector with interval 1, output to /tmp/pkb/runs/be9fa42c6a9b.
2022-09-02 02:11:17,458 be9fa42c6a9b MainThread pkb.py:1615 INFO     Setting --max_concurrent_threads=200.
2022-09-02 02:11:17,490 be9fa42c6a9b MainThread __init__.py:254 WARNING  The key "worker" was not in the default config, but was in user overrides. This may indicate a typo.
2022-09-02 02:11:17,490 be9fa42c6a9b MainThread __init__.py:254 WARNING  The key "controller" was not in the default config, but was in user overrides. This may indicate a typo.
2022-09-02 02:11:17,490 be9fa42c6a9b MainThread __init__.py:254 WARNING  The key "docker_auth_reuse" was not in the default config, but was in user overrides. This may indicate a typo.
2022-09-02 02:11:17,490 be9fa42c6a9b MainThread __init__.py:254 WARNING  The key "ssh_options" was not in the default config, but was in user overrides. This may indicate a typo.
2022-09-02 02:11:17,490 be9fa42c6a9b MainThread __init__.py:254 WARNING  The key "sar_flags" was not in the default config, but was in user overrides. This may indicate a typo.
2022-09-02 02:11:17,490 be9fa42c6a9b MainThread __init__.py:254 WARNING  The key "cloud" was not in the default config, but was in user overrides. This may indicate a typo.
2022-09-02 02:11:17,575 be9fa42c6a9b MainThread publisher.py:960 DEBUG    Using publishers: [<LogPublisher logger=<RootLogger root (DEBUG)> level=20>, <PrettyPrintStreamPublisher stream=<_io.TextIOWrapper name='<stdout>' mode='w' encoding='utf-8'>>, <NewlineDelimitedJSONPublisher file_path="/tmp/pkb/runs/be9fa42c6a9b/perfkitbenchmarker_results.json" mode="w">]
2022-09-02 02:11:17,576 be9fa42c6a9b MainThread publisher.py:960 DEBUG    Using publishers: [<LogPublisher logger=<RootLogger root (DEBUG)> level=20>, <PrettyPrintStreamPublisher stream=<_io.TextIOWrapper name='<stdout>' mode='w' encoding='utf-8'>>, <NewlineDelimitedJSONPublisher file_path="/tmp/pkb/runs/be9fa42c6a9b/perfkitbenchmarker_results.json" mode="w">]
2022-09-02 02:11:17,576 be9fa42c6a9b MainThread intel_publisher.py:74 INFO     Initialized Intel Sample Collector
2022-09-02 02:11:17,576 be9fa42c6a9b MainThread pkb.py:1399 INFO     
-------------------------------------------------------------------------------------
Starting benchmark 1/1 docker_pt (UID: docker_pt0) attempt 1 of 1
-------------------------------------------------------------------------------------
2022-09-02 02:11:17,576 be9fa42c6a9b MainThread publisher.py:960 DEBUG    Using publishers: [<LogPublisher logger=<RootLogger root (DEBUG)> level=20>, <PrettyPrintStreamPublisher stream=<_io.TextIOWrapper name='<stdout>' mode='w' encoding='utf-8'>>, <NewlineDelimitedJSONPublisher file_path="/tmp/pkb/runs/be9fa42c6a9b/perfkitbenchmarker_results.json" mode="w">]
2022-09-02 02:11:17,576 be9fa42c6a9b MainThread intel_publisher.py:74 INFO     Initialized Intel Sample Collector
2022-09-02 02:11:17,576 be9fa42c6a9b MainThread docker_pt(1/1) pkb.py:761 INFO     Provisioning resources for benchmark docker_pt
2022-09-02 02:11:17,576 be9fa42c6a9b MainThread docker_pt(1/1) static_virtual_machine.py:313 WARNING  Could not find os type for VM. Defaulting to ubuntu1804.
2022-09-02 02:11:17,577 be9fa42c6a9b MainThread docker_pt(1/1) static_virtual_machine.py:313 WARNING  Could not find os type for VM. Defaulting to ubuntu1804.
2022-09-02 02:11:17,577 be9fa42c6a9b Thread-2 (_ExecuteBackgroundThreadTasks) docker_pt(1/1) benchmark_spec.py:970 INFO     VM: 3.120.235.131
2022-09-02 02:11:17,578 be9fa42c6a9b Thread-3 (_ExecuteBackgroundThreadTasks) docker_pt(1/1) benchmark_spec.py:970 INFO     VM: 3.75.137.230
2022-09-02 02:11:17,578 be9fa42c6a9b Thread-2 (_ExecuteBackgroundThreadTasks) docker_pt(1/1) benchmark_spec.py:971 INFO     Waiting for boot completion.
2022-09-02 02:11:17,578 be9fa42c6a9b Thread-3 (_ExecuteBackgroundThreadTasks) docker_pt(1/1) benchmark_spec.py:971 INFO     Waiting for boot completion.
2022-09-02 02:11:17,578 be9fa42c6a9b Thread-2 (_ExecuteBackgroundThreadTasks) docker_pt(1/1) vm_util.py:363 INFO     Running: ssh -A -p 22 ubuntu@3.120.235.131 -2 -o UserKnownHostsFile=/dev/null -o StrictHostKeyChecking=no -o IdentitiesOnly=no -o PreferredAuthentications=publickey -o PasswordAuthentication=no -o ConnectTimeout=5 -o GSSAPIAuthentication=no -o ServerAliveInterval=30 -o ServerAliveCountMax=10 -i /home/sut/runs/280b72753f6b/perfkitbenchmarker_keyfile -o ControlPath="/tmp/pkb/runs/be9fa42c6a9b/ssh/%h" -o ControlMaster=auto -o ControlPersist=30m -o TCPKeepAlive=yes hostname
2022-09-02 02:11:17,578 be9fa42c6a9b Thread-3 (_ExecuteBackgroundThreadTasks) docker_pt(1/1) vm_util.py:363 INFO     Running: ssh -A -p 22 ubuntu@3.75.137.230 -2 -o UserKnownHostsFile=/dev/null -o StrictHostKeyChecking=no -o IdentitiesOnly=no -o PreferredAuthentications=publickey -o PasswordAuthentication=no -o ConnectTimeout=5 -o GSSAPIAuthentication=no -o ServerAliveInterval=30 -o ServerAliveCountMax=10 -i /home/sut/runs/280b72753f6b/perfkitbenchmarker_keyfile -o ControlPath="/tmp/pkb/runs/be9fa42c6a9b/ssh/%h" -o ControlMaster=auto -o ControlPersist=30m -o TCPKeepAlive=yes hostname
2022-09-02 02:11:19,558 be9fa42c6a9b Thread-2 (_ExecuteBackgroundThreadTasks) docker_pt(1/1) vm_util.py:426 DEBUG    Ran: {ssh -A -p 22 ubuntu@3.120.235.131 -2 -o UserKnownHostsFile=/dev/null -o StrictHostKeyChecking=no -o IdentitiesOnly=no -o PreferredAuthentications=publickey -o PasswordAuthentication=no -o ConnectTimeout=5 -o GSSAPIAuthentication=no -o ServerAliveInterval=30 -o ServerAliveCountMax=10 -i /home/sut/runs/280b72753f6b/perfkitbenchmarker_keyfile -o ControlPath="/tmp/pkb/runs/be9fa42c6a9b/ssh/%h" -o ControlMaster=auto -o ControlPersist=30m -o TCPKeepAlive=yes hostname}
ReturnCode:0
STDOUT: ip-10-0-0-122

STDERR: Warning: Permanently added '3.120.235.131' (ED25519) to the list of known hosts.

2022-09-02 02:11:19,615 be9fa42c6a9b Thread-3 (_ExecuteBackgroundThreadTasks) docker_pt(1/1) vm_util.py:426 DEBUG    Ran: {ssh -A -p 22 ubuntu@3.75.137.230 -2 -o UserKnownHostsFile=/dev/null -o StrictHostKeyChecking=no -o IdentitiesOnly=no -o PreferredAuthentications=publickey -o PasswordAuthentication=no -o ConnectTimeout=5 -o GSSAPIAuthentication=no -o ServerAliveInterval=30 -o ServerAliveCountMax=10 -i /home/sut/runs/280b72753f6b/perfkitbenchmarker_keyfile -o ControlPath="/tmp/pkb/runs/be9fa42c6a9b/ssh/%h" -o ControlMaster=auto -o ControlPersist=30m -o TCPKeepAlive=yes hostname}
ReturnCode:0
STDOUT: ip-10-0-0-54

STDERR: Warning: Permanently added '3.75.137.230' (ED25519) to the list of known hosts.

2022-09-02 02:11:19,630 be9fa42c6a9b Thread-7 (_ExecuteBackgroundThreadTasks) docker_pt(1/1) vm_util.py:363 INFO     Running: ssh -A -p 22 ubuntu@3.75.137.230 -2 -o UserKnownHostsFile=/dev/null -o StrictHostKeyChecking=no -o IdentitiesOnly=no -o PreferredAuthentications=publickey -o PasswordAuthentication=no -o ConnectTimeout=5 -o GSSAPIAuthentication=no -o ServerAliveInterval=30 -o ServerAliveCountMax=10 -i /home/sut/runs/280b72753f6b/perfkitbenchmarker_keyfile -o ControlPath="/tmp/pkb/runs/be9fa42c6a9b/ssh/%h" -o ControlMaster=auto -o ControlPersist=30m -o TCPKeepAlive=yes mkdir -p /tmp/pkb
2022-09-02 02:11:19,630 be9fa42c6a9b Thread-6 (_ExecuteBackgroundThreadTasks) docker_pt(1/1) vm_util.py:363 INFO     Running: ssh -A -p 22 ubuntu@3.120.235.131 -2 -o UserKnownHostsFile=/dev/null -o StrictHostKeyChecking=no -o IdentitiesOnly=no -o PreferredAuthentications=publickey -o PasswordAuthentication=no -o ConnectTimeout=5 -o GSSAPIAuthentication=no -o ServerAliveInterval=30 -o ServerAliveCountMax=10 -i /home/sut/runs/280b72753f6b/perfkitbenchmarker_keyfile -o ControlPath="/tmp/pkb/runs/be9fa42c6a9b/ssh/%h" -o ControlMaster=auto -o ControlPersist=30m -o TCPKeepAlive=yes mkdir -p /tmp/pkb
2022-09-02 02:11:19,941 be9fa42c6a9b Thread-6 (_ExecuteBackgroundThreadTasks) docker_pt(1/1) vm_util.py:426 DEBUG    Ran: {ssh -A -p 22 ubuntu@3.120.235.131 -2 -o UserKnownHostsFile=/dev/null -o StrictHostKeyChecking=no -o IdentitiesOnly=no -o PreferredAuthentications=publickey -o PasswordAuthentication=no -o ConnectTimeout=5 -o GSSAPIAuthentication=no -o ServerAliveInterval=30 -o ServerAliveCountMax=10 -i /home/sut/runs/280b72753f6b/perfkitbenchmarker_keyfile -o ControlPath="/tmp/pkb/runs/be9fa42c6a9b/ssh/%h" -o ControlMaster=auto -o ControlPersist=30m -o TCPKeepAlive=yes mkdir -p /tmp/pkb}
ReturnCode:0
STDOUT: 
STDERR: 
2022-09-02 02:11:19,941 be9fa42c6a9b Thread-6 (_ExecuteBackgroundThreadTasks) docker_pt(1/1) vm_util.py:363 INFO     Running: ssh -A -p 22 ubuntu@3.120.235.131 -2 -o UserKnownHostsFile=/dev/null -o StrictHostKeyChecking=no -o IdentitiesOnly=no -o PreferredAuthentications=publickey -o PasswordAuthentication=no -o ConnectTimeout=5 -o GSSAPIAuthentication=no -o ServerAliveInterval=30 -o ServerAliveCountMax=10 -i /home/sut/runs/280b72753f6b/perfkitbenchmarker_keyfile -o ControlPath="/tmp/pkb/runs/be9fa42c6a9b/ssh/%h" -o ControlMaster=auto -o ControlPersist=30m -o TCPKeepAlive=yes cat /proc/sys/net/ipv4/tcp_congestion_control
2022-09-02 02:11:19,981 be9fa42c6a9b Thread-7 (_ExecuteBackgroundThreadTasks) docker_pt(1/1) vm_util.py:426 DEBUG    Ran: {ssh -A -p 22 ubuntu@3.75.137.230 -2 -o UserKnownHostsFile=/dev/null -o StrictHostKeyChecking=no -o IdentitiesOnly=no -o PreferredAuthentications=publickey -o PasswordAuthentication=no -o ConnectTimeout=5 -o GSSAPIAuthentication=no -o ServerAliveInterval=30 -o ServerAliveCountMax=10 -i /home/sut/runs/280b72753f6b/perfkitbenchmarker_keyfile -o ControlPath="/tmp/pkb/runs/be9fa42c6a9b/ssh/%h" -o ControlMaster=auto -o ControlPersist=30m -o TCPKeepAlive=yes mkdir -p /tmp/pkb}
ReturnCode:0
STDOUT: 
STDERR: 
2022-09-02 02:11:19,981 be9fa42c6a9b Thread-7 (_ExecuteBackgroundThreadTasks) docker_pt(1/1) vm_util.py:363 INFO     Running: ssh -A -p 22 ubuntu@3.75.137.230 -2 -o UserKnownHostsFile=/dev/null -o StrictHostKeyChecking=no -o IdentitiesOnly=no -o PreferredAuthentications=publickey -o PasswordAuthentication=no -o ConnectTimeout=5 -o GSSAPIAuthentication=no -o ServerAliveInterval=30 -o ServerAliveCountMax=10 -i /home/sut/runs/280b72753f6b/perfkitbenchmarker_keyfile -o ControlPath="/tmp/pkb/runs/be9fa42c6a9b/ssh/%h" -o ControlMaster=auto -o ControlPersist=30m -o TCPKeepAlive=yes cat /proc/sys/net/ipv4/tcp_congestion_control
2022-09-02 02:11:20,285 be9fa42c6a9b Thread-6 (_ExecuteBackgroundThreadTasks) docker_pt(1/1) vm_util.py:426 DEBUG    Ran: {ssh -A -p 22 ubuntu@3.120.235.131 -2 -o UserKnownHostsFile=/dev/null -o StrictHostKeyChecking=no -o IdentitiesOnly=no -o PreferredAuthentications=publickey -o PasswordAuthentication=no -o ConnectTimeout=5 -o GSSAPIAuthentication=no -o ServerAliveInterval=30 -o ServerAliveCountMax=10 -i /home/sut/runs/280b72753f6b/perfkitbenchmarker_keyfile -o ControlPath="/tmp/pkb/runs/be9fa42c6a9b/ssh/%h" -o ControlMaster=auto -o ControlPersist=30m -o TCPKeepAlive=yes cat /proc/sys/net/ipv4/tcp_congestion_control}
ReturnCode:0
STDOUT: cubic

STDERR: 
2022-09-02 02:11:20,285 be9fa42c6a9b Thread-6 (_ExecuteBackgroundThreadTasks) docker_pt(1/1) vm_util.py:363 INFO     Running: ssh -A -p 22 ubuntu@3.120.235.131 -2 -o UserKnownHostsFile=/dev/null -o StrictHostKeyChecking=no -o IdentitiesOnly=no -o PreferredAuthentications=publickey -o PasswordAuthentication=no -o ConnectTimeout=5 -o GSSAPIAuthentication=no -o ServerAliveInterval=30 -o ServerAliveCountMax=10 -i /home/sut/runs/280b72753f6b/perfkitbenchmarker_keyfile -o ControlPath="/tmp/pkb/runs/be9fa42c6a9b/ssh/%h" -o ControlMaster=auto -o ControlPersist=30m -o TCPKeepAlive=yes lscpu
2022-09-02 02:11:20,342 be9fa42c6a9b Thread-7 (_ExecuteBackgroundThreadTasks) docker_pt(1/1) vm_util.py:426 DEBUG    Ran: {ssh -A -p 22 ubuntu@3.75.137.230 -2 -o UserKnownHostsFile=/dev/null -o StrictHostKeyChecking=no -o IdentitiesOnly=no -o PreferredAuthentications=publickey -o PasswordAuthentication=no -o ConnectTimeout=5 -o GSSAPIAuthentication=no -o ServerAliveInterval=30 -o ServerAliveCountMax=10 -i /home/sut/runs/280b72753f6b/perfkitbenchmarker_keyfile -o ControlPath="/tmp/pkb/runs/be9fa42c6a9b/ssh/%h" -o ControlMaster=auto -o ControlPersist=30m -o TCPKeepAlive=yes cat /proc/sys/net/ipv4/tcp_congestion_control}
ReturnCode:0
STDOUT: cubic

STDERR: 
2022-09-02 02:11:20,342 be9fa42c6a9b Thread-7 (_ExecuteBackgroundThreadTasks) docker_pt(1/1) vm_util.py:363 INFO     Running: ssh -A -p 22 ubuntu@3.75.137.230 -2 -o UserKnownHostsFile=/dev/null -o StrictHostKeyChecking=no -o IdentitiesOnly=no -o PreferredAuthentications=publickey -o PasswordAuthentication=no -o ConnectTimeout=5 -o GSSAPIAuthentication=no -o ServerAliveInterval=30 -o ServerAliveCountMax=10 -i /home/sut/runs/280b72753f6b/perfkitbenchmarker_keyfile -o ControlPath="/tmp/pkb/runs/be9fa42c6a9b/ssh/%h" -o ControlMaster=auto -o ControlPersist=30m -o TCPKeepAlive=yes lscpu
2022-09-02 02:11:20,658 be9fa42c6a9b Thread-6 (_ExecuteBackgroundThreadTasks) docker_pt(1/1) vm_util.py:426 DEBUG    Ran: {ssh -A -p 22 ubuntu@3.120.235.131 -2 -o UserKnownHostsFile=/dev/null -o StrictHostKeyChecking=no -o IdentitiesOnly=no -o PreferredAuthentications=publickey -o PasswordAuthentication=no -o ConnectTimeout=5 -o GSSAPIAuthentication=no -o ServerAliveInterval=30 -o ServerAliveCountMax=10 -i /home/sut/runs/280b72753f6b/perfkitbenchmarker_keyfile -o ControlPath="/tmp/pkb/runs/be9fa42c6a9b/ssh/%h" -o ControlMaster=auto -o ControlPersist=30m -o TCPKeepAlive=yes lscpu}
ReturnCode:0
STDOUT: Architecture:                    x86_64
CPU op-mode(s):                  32-bit, 64-bit
Address sizes:                   48 bits physical, 48 bits virtual
Byte Order:                      Little Endian
CPU(s):                          64
On-line CPU(s) list:             0-63
Vendor ID:                       AuthenticAMD
Model name:                      AMD EPYC 7R13 Processor
CPU family:                      25
Model:                           1
Thread(s) per core:              2
Core(s) per socket:              32
Socket(s):                       1
Stepping:                        1
BogoMIPS:                        5299.97
Flags:                           fpu vme de pse tsc msr pae mce cx8 apic sep mtrr pge mca cmov pat pse36 clflush mmx fxsr sse sse2 ht syscall nx mmxext fxsr_opt pdpe1gb rdtscp lm constant_tsc rep_good nopl nonstop_tsc cpuid extd_apicid aperfmperf tsc_known_freq pni pclmulqdq ssse3 fma cx16 pcid sse4_1 sse4_2 x2apic movbe popcnt aes xsave avx f16c rdrand hypervisor lahf_lm cmp_legacy cr8_legacy abm sse4a misalignsse 3dnowprefetch topoext invpcid_single ssbd ibrs ibpb stibp vmmcall fsgsbase bmi1 avx2 smep bmi2 erms invpcid rdseed adx smap clflushopt clwb sha_ni xsaveopt xsavec xgetbv1 clzero xsaveerptr rdpru wbnoinvd arat npt nrip_save vaes vpclmulqdq rdpid
Hypervisor vendor:               KVM
Virtualization type:             full
L1d cache:                       1 MiB (32 instances)
L1i cache:                       1 MiB (32 instances)
L2 cache:                        16 MiB (32 instances)
L3 cache:                        128 MiB (4 instances)
NUMA node(s):                    2
NUMA node0 CPU(s):               0-15,32-47
NUMA node1 CPU(s):               16-31,48-63
Vulnerability Itlb multihit:     Not affected
Vulnerability L1tf:              Not affected
Vulnerability Mds:               Not affected
Vulnerability Meltdown:          Not affected
Vulnerability Mmio stale data:   Not affected
Vulnerability Retbleed:          Not affected
Vulnerability Spec store bypass: Mitigation; Speculative Store Bypass disabled via prctl and seccomp
Vulnerability Spectre v1:        Mitigation; usercopy/swapgs barriers and __user pointer sanitization
Vulnerability Spectre v2:        Mitigation; Retpolines, IBPB conditional, IBRS_FW, STIBP conditional, RSB filling
Vulnerability Srbds:             Not affected
Vulnerability Tsx async abort:   Not affected

STDERR: 
2022-09-02 02:11:20,658 be9fa42c6a9b Thread-6 (_ExecuteBackgroundThreadTasks) docker_pt(1/1) vm_util.py:363 INFO     Running: ssh -A -p 22 ubuntu@3.120.235.131 -2 -o UserKnownHostsFile=/dev/null -o StrictHostKeyChecking=no -o IdentitiesOnly=no -o PreferredAuthentications=publickey -o PasswordAuthentication=no -o ConnectTimeout=5 -o GSSAPIAuthentication=no -o ServerAliveInterval=30 -o ServerAliveCountMax=10 -i /home/sut/runs/280b72753f6b/perfkitbenchmarker_keyfile -o ControlPath="/tmp/pkb/runs/be9fa42c6a9b/ssh/%h" -o ControlMaster=auto -o ControlPersist=30m -o TCPKeepAlive=yes grep PRETTY_NAME /etc/os-release
2022-09-02 02:11:20,722 be9fa42c6a9b Thread-7 (_ExecuteBackgroundThreadTasks) docker_pt(1/1) vm_util.py:426 DEBUG    Ran: {ssh -A -p 22 ubuntu@3.75.137.230 -2 -o UserKnownHostsFile=/dev/null -o StrictHostKeyChecking=no -o IdentitiesOnly=no -o PreferredAuthentications=publickey -o PasswordAuthentication=no -o ConnectTimeout=5 -o GSSAPIAuthentication=no -o ServerAliveInterval=30 -o ServerAliveCountMax=10 -i /home/sut/runs/280b72753f6b/perfkitbenchmarker_keyfile -o ControlPath="/tmp/pkb/runs/be9fa42c6a9b/ssh/%h" -o ControlMaster=auto -o ControlPersist=30m -o TCPKeepAlive=yes lscpu}
ReturnCode:0
STDOUT: Architecture:                    x86_64
CPU op-mode(s):                  32-bit, 64-bit
Address sizes:                   48 bits physical, 48 bits virtual
Byte Order:                      Little Endian
CPU(s):                          16
On-line CPU(s) list:             0-15
Vendor ID:                       AuthenticAMD
Model name:                      AMD EPYC 7R13 Processor
CPU family:                      25
Model:                           1
Thread(s) per core:              2
Core(s) per socket:              8
Socket(s):                       1
Stepping:                        1
BogoMIPS:                        5299.97
Flags:                           fpu vme de pse tsc msr pae mce cx8 apic sep mtrr pge mca cmov pat pse36 clflush mmx fxsr sse sse2 ht syscall nx mmxext fxsr_opt pdpe1gb rdtscp lm constant_tsc rep_good nopl nonstop_tsc cpuid extd_apicid aperfmperf tsc_known_freq pni pclmulqdq ssse3 fma cx16 pcid sse4_1 sse4_2 x2apic movbe popcnt aes xsave avx f16c rdrand hypervisor lahf_lm cmp_legacy cr8_legacy abm sse4a misalignsse 3dnowprefetch topoext invpcid_single ssbd ibrs ibpb stibp vmmcall fsgsbase bmi1 avx2 smep bmi2 erms invpcid rdseed adx smap clflushopt clwb sha_ni xsaveopt xsavec xgetbv1 clzero xsaveerptr rdpru wbnoinvd arat npt nrip_save vaes vpclmulqdq rdpid
Hypervisor vendor:               KVM
Virtualization type:             full
L1d cache:                       256 KiB (8 instances)
L1i cache:                       256 KiB (8 instances)
L2 cache:                        4 MiB (8 instances)
L3 cache:                        32 MiB (1 instance)
NUMA node(s):                    1
NUMA node0 CPU(s):               0-15
Vulnerability Itlb multihit:     Not affected
Vulnerability L1tf:              Not affected
Vulnerability Mds:               Not affected
Vulnerability Meltdown:          Not affected
Vulnerability Mmio stale data:   Not affected
Vulnerability Retbleed:          Not affected
Vulnerability Spec store bypass: Mitigation; Speculative Store Bypass disabled via prctl and seccomp
Vulnerability Spectre v1:        Mitigation; usercopy/swapgs barriers and __user pointer sanitization
Vulnerability Spectre v2:        Mitigation; Retpolines, IBPB conditional, IBRS_FW, STIBP conditional, RSB filling
Vulnerability Srbds:             Not affected
Vulnerability Tsx async abort:   Not affected

STDERR: 
2022-09-02 02:11:20,722 be9fa42c6a9b Thread-7 (_ExecuteBackgroundThreadTasks) docker_pt(1/1) vm_util.py:363 INFO     Running: ssh -A -p 22 ubuntu@3.75.137.230 -2 -o UserKnownHostsFile=/dev/null -o StrictHostKeyChecking=no -o IdentitiesOnly=no -o PreferredAuthentications=publickey -o PasswordAuthentication=no -o ConnectTimeout=5 -o GSSAPIAuthentication=no -o ServerAliveInterval=30 -o ServerAliveCountMax=10 -i /home/sut/runs/280b72753f6b/perfkitbenchmarker_keyfile -o ControlPath="/tmp/pkb/runs/be9fa42c6a9b/ssh/%h" -o ControlMaster=auto -o ControlPersist=30m -o TCPKeepAlive=yes grep PRETTY_NAME /etc/os-release
2022-09-02 02:11:21,005 be9fa42c6a9b Thread-6 (_ExecuteBackgroundThreadTasks) docker_pt(1/1) vm_util.py:426 DEBUG    Ran: {ssh -A -p 22 ubuntu@3.120.235.131 -2 -o UserKnownHostsFile=/dev/null -o StrictHostKeyChecking=no -o IdentitiesOnly=no -o PreferredAuthentications=publickey -o PasswordAuthentication=no -o ConnectTimeout=5 -o GSSAPIAuthentication=no -o ServerAliveInterval=30 -o ServerAliveCountMax=10 -i /home/sut/runs/280b72753f6b/perfkitbenchmarker_keyfile -o ControlPath="/tmp/pkb/runs/be9fa42c6a9b/ssh/%h" -o ControlMaster=auto -o ControlPersist=30m -o TCPKeepAlive=yes grep PRETTY_NAME /etc/os-release}
ReturnCode:0
STDOUT: PRETTY_NAME="Ubuntu 22.04.1 LTS"

STDERR: 
2022-09-02 02:11:21,005 be9fa42c6a9b Thread-6 (_ExecuteBackgroundThreadTasks) docker_pt(1/1) vm_util.py:363 INFO     Running: ssh -A -p 22 ubuntu@3.120.235.131 -2 -o UserKnownHostsFile=/dev/null -o StrictHostKeyChecking=no -o IdentitiesOnly=no -o PreferredAuthentications=publickey -o PasswordAuthentication=no -o ConnectTimeout=5 -o GSSAPIAuthentication=no -o ServerAliveInterval=30 -o ServerAliveCountMax=10 -i /home/sut/runs/280b72753f6b/perfkitbenchmarker_keyfile -o ControlPath="/tmp/pkb/runs/be9fa42c6a9b/ssh/%h" -o ControlMaster=auto -o ControlPersist=30m -o TCPKeepAlive=yes uname -r
2022-09-02 02:11:21,083 be9fa42c6a9b Thread-7 (_ExecuteBackgroundThreadTasks) docker_pt(1/1) vm_util.py:426 DEBUG    Ran: {ssh -A -p 22 ubuntu@3.75.137.230 -2 -o UserKnownHostsFile=/dev/null -o StrictHostKeyChecking=no -o IdentitiesOnly=no -o PreferredAuthentications=publickey -o PasswordAuthentication=no -o ConnectTimeout=5 -o GSSAPIAuthentication=no -o ServerAliveInterval=30 -o ServerAliveCountMax=10 -i /home/sut/runs/280b72753f6b/perfkitbenchmarker_keyfile -o ControlPath="/tmp/pkb/runs/be9fa42c6a9b/ssh/%h" -o ControlMaster=auto -o ControlPersist=30m -o TCPKeepAlive=yes grep PRETTY_NAME /etc/os-release}
ReturnCode:0
STDOUT: PRETTY_NAME="Ubuntu 22.04.1 LTS"

STDERR: 
2022-09-02 02:11:21,083 be9fa42c6a9b Thread-7 (_ExecuteBackgroundThreadTasks) docker_pt(1/1) vm_util.py:363 INFO     Running: ssh -A -p 22 ubuntu@3.75.137.230 -2 -o UserKnownHostsFile=/dev/null -o StrictHostKeyChecking=no -o IdentitiesOnly=no -o PreferredAuthentications=publickey -o PasswordAuthentication=no -o ConnectTimeout=5 -o GSSAPIAuthentication=no -o ServerAliveInterval=30 -o ServerAliveCountMax=10 -i /home/sut/runs/280b72753f6b/perfkitbenchmarker_keyfile -o ControlPath="/tmp/pkb/runs/be9fa42c6a9b/ssh/%h" -o ControlMaster=auto -o ControlPersist=30m -o TCPKeepAlive=yes uname -r
2022-09-02 02:11:21,352 be9fa42c6a9b Thread-6 (_ExecuteBackgroundThreadTasks) docker_pt(1/1) vm_util.py:426 DEBUG    Ran: {ssh -A -p 22 ubuntu@3.120.235.131 -2 -o UserKnownHostsFile=/dev/null -o StrictHostKeyChecking=no -o IdentitiesOnly=no -o PreferredAuthentications=publickey -o PasswordAuthentication=no -o ConnectTimeout=5 -o GSSAPIAuthentication=no -o ServerAliveInterval=30 -o ServerAliveCountMax=10 -i /home/sut/runs/280b72753f6b/perfkitbenchmarker_keyfile -o ControlPath="/tmp/pkb/runs/be9fa42c6a9b/ssh/%h" -o ControlMaster=auto -o ControlPersist=30m -o TCPKeepAlive=yes uname -r}
ReturnCode:0
STDOUT: 5.15.0-1019-aws

STDERR: 
2022-09-02 02:11:21,352 be9fa42c6a9b Thread-6 (_ExecuteBackgroundThreadTasks) docker_pt(1/1) vm_util.py:363 INFO     Running: ssh -A -p 22 ubuntu@3.120.235.131 -2 -o UserKnownHostsFile=/dev/null -o StrictHostKeyChecking=no -o IdentitiesOnly=no -o PreferredAuthentications=publickey -o PasswordAuthentication=no -o ConnectTimeout=5 -o GSSAPIAuthentication=no -o ServerAliveInterval=30 -o ServerAliveCountMax=10 -i /home/sut/runs/280b72753f6b/perfkitbenchmarker_keyfile -o ControlPath="/tmp/pkb/runs/be9fa42c6a9b/ssh/%h" -o ControlMaster=auto -o ControlPersist=30m -o TCPKeepAlive=yes sudo fdisk -l
2022-09-02 02:11:21,443 be9fa42c6a9b Thread-7 (_ExecuteBackgroundThreadTasks) docker_pt(1/1) vm_util.py:426 DEBUG    Ran: {ssh -A -p 22 ubuntu@3.75.137.230 -2 -o UserKnownHostsFile=/dev/null -o StrictHostKeyChecking=no -o IdentitiesOnly=no -o PreferredAuthentications=publickey -o PasswordAuthentication=no -o ConnectTimeout=5 -o GSSAPIAuthentication=no -o ServerAliveInterval=30 -o ServerAliveCountMax=10 -i /home/sut/runs/280b72753f6b/perfkitbenchmarker_keyfile -o ControlPath="/tmp/pkb/runs/be9fa42c6a9b/ssh/%h" -o ControlMaster=auto -o ControlPersist=30m -o TCPKeepAlive=yes uname -r}
ReturnCode:0
STDOUT: 5.15.0-1019-aws

STDERR: 
2022-09-02 02:11:21,443 be9fa42c6a9b Thread-7 (_ExecuteBackgroundThreadTasks) docker_pt(1/1) vm_util.py:363 INFO     Running: ssh -A -p 22 ubuntu@3.75.137.230 -2 -o UserKnownHostsFile=/dev/null -o StrictHostKeyChecking=no -o IdentitiesOnly=no -o PreferredAuthentications=publickey -o PasswordAuthentication=no -o ConnectTimeout=5 -o GSSAPIAuthentication=no -o ServerAliveInterval=30 -o ServerAliveCountMax=10 -i /home/sut/runs/280b72753f6b/perfkitbenchmarker_keyfile -o ControlPath="/tmp/pkb/runs/be9fa42c6a9b/ssh/%h" -o ControlMaster=auto -o ControlPersist=30m -o TCPKeepAlive=yes sudo fdisk -l
2022-09-02 02:11:21,679 be9fa42c6a9b Thread-6 (_ExecuteBackgroundThreadTasks) docker_pt(1/1) vm_util.py:426 DEBUG    Ran: {ssh -A -p 22 ubuntu@3.120.235.131 -2 -o UserKnownHostsFile=/dev/null -o StrictHostKeyChecking=no -o IdentitiesOnly=no -o PreferredAuthentications=publickey -o PasswordAuthentication=no -o ConnectTimeout=5 -o GSSAPIAuthentication=no -o ServerAliveInterval=30 -o ServerAliveCountMax=10 -i /home/sut/runs/280b72753f6b/perfkitbenchmarker_keyfile -o ControlPath="/tmp/pkb/runs/be9fa42c6a9b/ssh/%h" -o ControlMaster=auto -o ControlPersist=30m -o TCPKeepAlive=yes sudo fdisk -l}
ReturnCode:0
STDOUT: Disk /dev/loop0: 25.11 MiB, 26324992 bytes, 51416 sectors
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes


Disk /dev/loop1: 55.56 MiB, 58261504 bytes, 113792 sectors
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes


Disk /dev/loop2: 61.96 MiB, 64966656 bytes, 126888 sectors
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes


Disk /dev/loop3: 102.98 MiB, 107986944 bytes, 210912 sectors
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes


Disk /dev/loop4: 46.96 MiB, 49242112 bytes, 96176 sectors
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes


Disk /dev/nvme0n1: 500 GiB, 536870912000 bytes, 1048576000 sectors
Disk model: Amazon Elastic Block Store              
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 4096 bytes
I/O size (minimum/optimal): 4096 bytes / 4096 bytes
Disklabel type: gpt
Disk identifier: E7D33514-8A85-4C9D-80D2-27E4FFE27880

Device           Start        End    Sectors   Size Type
/dev/nvme0n1p1  227328 1048575966 1048348639 499.9G Linux filesystem
/dev/nvme0n1p14   2048      10239       8192     4M BIOS boot
/dev/nvme0n1p15  10240     227327     217088   106M EFI System

Partition table entries are not in disk order.

STDERR: 
2022-09-02 02:11:21,810 be9fa42c6a9b Thread-7 (_ExecuteBackgroundThreadTasks) docker_pt(1/1) vm_util.py:426 DEBUG    Ran: {ssh -A -p 22 ubuntu@3.75.137.230 -2 -o UserKnownHostsFile=/dev/null -o StrictHostKeyChecking=no -o IdentitiesOnly=no -o PreferredAuthentications=publickey -o PasswordAuthentication=no -o ConnectTimeout=5 -o GSSAPIAuthentication=no -o ServerAliveInterval=30 -o ServerAliveCountMax=10 -i /home/sut/runs/280b72753f6b/perfkitbenchmarker_keyfile -o ControlPath="/tmp/pkb/runs/be9fa42c6a9b/ssh/%h" -o ControlMaster=auto -o ControlPersist=30m -o TCPKeepAlive=yes sudo fdisk -l}
ReturnCode:0
STDOUT: Disk /dev/loop0: 25.11 MiB, 26324992 bytes, 51416 sectors
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes


Disk /dev/loop1: 55.56 MiB, 58261504 bytes, 113792 sectors
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes


Disk /dev/loop2: 61.96 MiB, 64966656 bytes, 126888 sectors
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes


Disk /dev/loop3: 102.98 MiB, 107986944 bytes, 210912 sectors
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes


Disk /dev/loop4: 46.96 MiB, 49242112 bytes, 96176 sectors
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes


Disk /dev/nvme0n1: 100 GiB, 107374182400 bytes, 209715200 sectors
Disk model: Amazon Elastic Block Store              
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 4096 bytes
I/O size (minimum/optimal): 4096 bytes / 4096 bytes
Disklabel type: gpt
Disk identifier: E7D33514-8A85-4C9D-80D2-27E4FFE27880

Device           Start       End   Sectors  Size Type
/dev/nvme0n1p1  227328 209715166 209487839 99.9G Linux filesystem
/dev/nvme0n1p14   2048     10239      8192    4M BIOS boot
/dev/nvme0n1p15  10240    227327    217088  106M EFI System

Partition table entries are not in disk order.

STDERR: 
2022-09-02 02:11:21,818 be9fa42c6a9b MainThread docker_pt(1/1) vm_util.py:618 INFO     ssh to VMs in this benchmark by name with:
  ssh -F /tmp/pkb/runs/be9fa42c6a9b/ssh_config <vm_name>
  ssh -F /tmp/pkb/runs/be9fa42c6a9b/ssh_config vm<index>
  ssh -F /tmp/pkb/runs/be9fa42c6a9b/ssh_config <group_name>-<index>
2022-09-02 02:11:21,819 be9fa42c6a9b MainThread docker_pt(1/1) events.py:175 INFO     Receive after_phase signal from :provision, not triggering _RunPostRunScript.
2022-09-02 02:11:21,819 be9fa42c6a9b MainThread docker_pt(1/1) pkb.py:864 INFO     Preparing benchmark docker_pt
2022-09-02 02:11:21,822 be9fa42c6a9b MainThread docker_pt(1/1) docker_passthrough.py:535 INFO     SUT/Info: controller 3.75.137.230 10.0.0.54
2022-09-02 02:11:21,822 be9fa42c6a9b MainThread docker_pt(1/1) docker_passthrough.py:535 INFO     SUT/Info: worker 3.120.235.131 10.0.0.122
2022-09-02 02:11:21,822 be9fa42c6a9b MainThread docker_pt(1/1) vm_util.py:363 INFO     Running: ssh -A -p 22 ubuntu@3.75.137.230 -2 -o UserKnownHostsFile=/dev/null -o StrictHostKeyChecking=no -o IdentitiesOnly=no -o PreferredAuthentications=publickey -o PasswordAuthentication=no -o ConnectTimeout=5 -o GSSAPIAuthentication=no -o ServerAliveInterval=30 -o ServerAliveCountMax=10 -i /home/sut/runs/280b72753f6b/perfkitbenchmarker_keyfile -o ControlPath="/tmp/pkb/runs/be9fa42c6a9b/ssh/%h" -o ControlMaster=auto -o ControlPersist=30m -o TCPKeepAlive=yes sudo mkdir -p /opt/pkb/root-9b7faf1c1f60 && bash -c 'sudo chown $(id -u):$(id -g) /opt/pkb/root-9b7faf1c1f60'
2022-09-02 02:11:22,184 be9fa42c6a9b MainThread docker_pt(1/1) vm_util.py:426 DEBUG    Ran: {ssh -A -p 22 ubuntu@3.75.137.230 -2 -o UserKnownHostsFile=/dev/null -o StrictHostKeyChecking=no -o IdentitiesOnly=no -o PreferredAuthentications=publickey -o PasswordAuthentication=no -o ConnectTimeout=5 -o GSSAPIAuthentication=no -o ServerAliveInterval=30 -o ServerAliveCountMax=10 -i /home/sut/runs/280b72753f6b/perfkitbenchmarker_keyfile -o ControlPath="/tmp/pkb/runs/be9fa42c6a9b/ssh/%h" -o ControlMaster=auto -o ControlPersist=30m -o TCPKeepAlive=yes sudo mkdir -p /opt/pkb/root-9b7faf1c1f60 && bash -c 'sudo chown $(id -u):$(id -g) /opt/pkb/root-9b7faf1c1f60'}
ReturnCode:0
STDOUT: 
STDERR: 
2022-09-02 02:11:22,184 be9fa42c6a9b MainThread docker_pt(1/1) vm_util.py:363 INFO     Running: ssh -A -p 22 ubuntu@3.75.137.230 -2 -o UserKnownHostsFile=/dev/null -o StrictHostKeyChecking=no -o IdentitiesOnly=no -o PreferredAuthentications=publickey -o PasswordAuthentication=no -o ConnectTimeout=5 -o GSSAPIAuthentication=no -o ServerAliveInterval=30 -o ServerAliveCountMax=10 -i /home/sut/runs/280b72753f6b/perfkitbenchmarker_keyfile -o ControlPath="/tmp/pkb/runs/be9fa42c6a9b/ssh/%h" -o ControlMaster=auto -o ControlPersist=30m -o TCPKeepAlive=yes kubectl get nodes -o='custom-columns=name:.metadata.name,ip:.status.addresses[?(@.type=="InternalIP")].address' --no-headers
2022-09-02 02:11:22,598 be9fa42c6a9b MainThread docker_pt(1/1) vm_util.py:426 DEBUG    Ran: {ssh -A -p 22 ubuntu@3.75.137.230 -2 -o UserKnownHostsFile=/dev/null -o StrictHostKeyChecking=no -o IdentitiesOnly=no -o PreferredAuthentications=publickey -o PasswordAuthentication=no -o ConnectTimeout=5 -o GSSAPIAuthentication=no -o ServerAliveInterval=30 -o ServerAliveCountMax=10 -i /home/sut/runs/280b72753f6b/perfkitbenchmarker_keyfile -o ControlPath="/tmp/pkb/runs/be9fa42c6a9b/ssh/%h" -o ControlMaster=auto -o ControlPersist=30m -o TCPKeepAlive=yes kubectl get nodes -o='custom-columns=name:.metadata.name,ip:.status.addresses[?(@.type=="InternalIP")].address' --no-headers}
ReturnCode:0
STDOUT: ip-10-0-0-122   10.0.0.122
ip-10-0-0-54    10.0.0.54

STDERR: 
2022-09-02 02:11:22,603 be9fa42c6a9b MainThread docker_pt(1/1) vm_util.py:363 INFO     Running: skopeo inspect docker-daemon:dlrm-pytorch-epyc-facebook-dummy:latest
2022-09-02 02:11:49,609 be9fa42c6a9b MainThread docker_pt(1/1) vm_util.py:426 DEBUG    Ran: {skopeo inspect docker-daemon:dlrm-pytorch-epyc-facebook-dummy:latest}
ReturnCode:0
STDOUT: {
    "Name": "docker.io/library/dlrm-pytorch-epyc-facebook-dummy",
    "Digest": "sha256:c6642e6bc75f4a7586a735c53f22993596035f15d57516b8feebb705177d3021",
    "RepoTags": [],
    "Created": "2022-09-01T18:10:11.386883743-07:00",
    "DockerVersion": "",
    "Labels": null,
    "Architecture": "amd64",
    "Os": "linux",
    "Layers": [
        "sha256:b40ed86654e59e1012e1716d5384910f8c3bb58274b7b00fca564a53e9897ba3",
        "sha256:5f70bf18a086007016e948b04aed3b82103a36bea41755b6cddfaf10ace3c6ef",
        "sha256:fdc0a7935db8fd6e94a43cb6de2578014b342e0f7b49a834c36b9d1ab639c341",
        "sha256:6e081de81e5ae87d3df831f43e2a91f2b286a882fa92b28a7242ee0e193102d6",
        "sha256:b84156bd96c6895be171f4f41d552bb81408225f59f2e83f9a5893f9ced52b4b",
        "sha256:a55887578a31a2f9ced3dfbfd0ef515de2784f1a8e84754795ad8c211668ba62",
        "sha256:ff513a56a89cf8e1523d83befac8f47681bffc5e597701bf6712cc9bd5613fc9",
        "sha256:2f8652c2391df5ca4d503ab963b3ec8a2118db59784b979424bdbcd55a389f7b",
        "sha256:9b8e124679c850a94f8aa95ac207969f77db03c037d529ae6c147afa8306049c",
        "sha256:acedd2ecad75b4a8ab6971391153f8cf256f59e5495ab2f631bcd1b3e9c9449f",
        "sha256:6f0d1007ff710d79e1419c9922882eb8e7bde91e51402ca35f2f76ba6665d019",
        "sha256:1a4b1910d57ce177abe60685df85aa7e111a233aeb7bcd9cfef98218dd5fdfd6",
        "sha256:9a13a01986c8cd6dd5dc43363341f9405b47ab8dffd0b0b05b3f5b9ea03e12c5",
        "sha256:3f2cb475e9eb6b4e08585e7d13017d866864507a3f747192c80817016610616e",
        "sha256:5a65897e5e1e3a666c983bd1e47a7102b1d9c05b0942851d7575e87c4e0a77de",
        "sha256:1c49e8ef3ea3a50865221124199f4e8c5a234442ce948199363a58e99d847d67",
        "sha256:d34e56f629e72d81386c419f4d125a3d408229bf6bdedb4e526acc5b73edd34f",
        "sha256:4dbf48a645c5eed9a77e26ff0fac7d8961530de2999ef28f1c66eee72d161332",
        "sha256:1996af16daecb3d967e3743da05cc9a3df4298a7ef8563292e798442db5a4cf4",
        "sha256:74a386e4ac5d210fa9f961d1f6f903c022af9252c386210e32c2e791149ff237",
        "sha256:58cdd840bdd6ed011dbbb8ad1d891275dd0b5b6cb08bf74dbeae4efd04b9f5af",
        "sha256:1db36a6d18db259d392476dbf2c596e78d790eb2744788c8f4b90d7c22d40cc7",
        "sha256:acd756df349bdd49bd097793dee04dfdc9f4dec857205704916883b0503f5e72",
        "sha256:d878fd13f2fa328308c9732306eb732dce1cf19cda9123cb18c7d25f49e3fb76",
        "sha256:5f70bf18a086007016e948b04aed3b82103a36bea41755b6cddfaf10ace3c6ef",
        "sha256:cb9a6dee55415bd20a6d196cec8be701c26ff7ddd401358356a82095df559acc"
    ],
    "Env": [
        "PATH=/opt/anaconda3/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin",
        "PYTHON_VER=3.8",
        "PYTORCH_VER=1.9.0",
        "LANG=C.UTF-8",
        "LC_ALL=C.UTF-8",
        "HOME=/root",
        "ZENDNN_DIR=/home/workspace/PT_v1.9.0_ZenDNN_v3.2_Python_v3.8/ZenDNN",
        "ZENDNN_BLIS_PATH=/home/workspace/amd-blis",
        "ZENDNN_AOCC_COMP_PATH=/home/workspace/aocc-compiler-3.0.0",
        "LD_PRELOAD=/home/workspace/aocc-compiler-3.0.0/lib/libomp.so:/usr/local/lib/libjemalloc.so",
        "MALLOC_CONF=oversize_threshold:1,background_thread:true,metadata_thp:auto,dirty_decay_ms:-1,muzzy_decay_ms:-1",
        "BENCHMARK_DIR=/home/workspace/dlrm"
    ]
}

STDERR: 
2022-09-02 02:11:49,614 be9fa42c6a9b MainThread docker_pt(1/1) vm_util.py:363 INFO     Running: scp -P 22 -pr -2 -o UserKnownHostsFile=/dev/null -o StrictHostKeyChecking=no -o IdentitiesOnly=no -o PreferredAuthentications=publickey -o PasswordAuthentication=no -o ConnectTimeout=30 -o GSSAPIAuthentication=no -o ServerAliveInterval=30 -o ServerAliveCountMax=10 -i /home/sut/runs/280b72753f6b/perfkitbenchmarker_keyfile -o ControlPath="/tmp/pkb/runs/be9fa42c6a9b/ssh/%h" -o ControlMaster=auto -o ControlPersist=30m -o TCPKeepAlive=yes /home/kubernetes-config.yaml.mod.yaml ubuntu@[3.75.137.230]:/opt/pkb/root-9b7faf1c1f60/kubernetes_config.yaml
2022-09-02 02:11:50,586 be9fa42c6a9b MainThread docker_pt(1/1) vm_util.py:426 DEBUG    Ran: {scp -P 22 -pr -2 -o UserKnownHostsFile=/dev/null -o StrictHostKeyChecking=no -o IdentitiesOnly=no -o PreferredAuthentications=publickey -o PasswordAuthentication=no -o ConnectTimeout=30 -o GSSAPIAuthentication=no -o ServerAliveInterval=30 -o ServerAliveCountMax=10 -i /home/sut/runs/280b72753f6b/perfkitbenchmarker_keyfile -o ControlPath="/tmp/pkb/runs/be9fa42c6a9b/ssh/%h" -o ControlMaster=auto -o ControlPersist=30m -o TCPKeepAlive=yes /home/kubernetes-config.yaml.mod.yaml ubuntu@[3.75.137.230]:/opt/pkb/root-9b7faf1c1f60/kubernetes_config.yaml}
ReturnCode:0
STDOUT: 
STDERR: 
2022-09-02 02:11:50,586 be9fa42c6a9b MainThread docker_pt(1/1) vm_util.py:363 INFO     Running: mkdir -p /home/itr-1
2022-09-02 02:11:50,588 be9fa42c6a9b MainThread docker_pt(1/1) vm_util.py:426 DEBUG    Ran: {mkdir -p /home/itr-1}
ReturnCode:0
STDOUT: 
STDERR: 
2022-09-02 02:11:50,588 be9fa42c6a9b MainThread docker_pt(1/1) vm_util.py:363 INFO     Running: cp -f /home/kpi.sh /home/itr-1
2022-09-02 02:11:50,589 be9fa42c6a9b MainThread docker_pt(1/1) vm_util.py:426 DEBUG    Ran: {cp -f /home/kpi.sh /home/itr-1}
ReturnCode:0
STDOUT: 
STDERR: 
2022-09-02 02:11:50,589 be9fa42c6a9b MainThread docker_pt(1/1) vm_util.py:363 INFO     Running: sh -c sed -i '1a[ -d itr-1 ] && cd itr-1' /home/kpi.sh
2022-09-02 02:11:50,591 be9fa42c6a9b MainThread docker_pt(1/1) vm_util.py:426 DEBUG    Ran: {sh -c sed -i '1a[ -d itr-1 ] && cd itr-1' /home/kpi.sh}
ReturnCode:0
STDOUT: 
STDERR: 
2022-09-02 02:11:50,594 be9fa42c6a9b MainThread docker_pt(1/1) events.py:175 INFO     Receive after_phase signal from :prepare, not triggering _RunPostRunScript.
2022-09-02 02:11:50,594 be9fa42c6a9b MainThread docker_pt(1/1) vm_util.py:363 INFO     Running: rm -rf /tmp/pkb/svr-info-be9fa42c6a9b
2022-09-02 02:11:50,595 be9fa42c6a9b MainThread docker_pt(1/1) vm_util.py:426 DEBUG    Ran: {rm -rf /tmp/pkb/svr-info-be9fa42c6a9b}
ReturnCode:0
STDOUT: 
STDERR: 
2022-09-02 02:11:50,595 be9fa42c6a9b MainThread docker_pt(1/1) vm_util.py:363 INFO     Running: mkdir -p /tmp/pkb/svr-info-be9fa42c6a9b
2022-09-02 02:11:50,597 be9fa42c6a9b MainThread docker_pt(1/1) vm_util.py:426 DEBUG    Ran: {mkdir -p /tmp/pkb/svr-info-be9fa42c6a9b}
ReturnCode:0
STDOUT: 
STDERR: 
2022-09-02 02:11:50,597 be9fa42c6a9b MainThread docker_pt(1/1) svrinfo.py:84 INFO     downloading svrinfo from: https://cumulus.s3.us-east-2.amazonaws.com/svr_info/svr-info-internal-2.0.1.tgz
2022-09-02 02:11:50,597 be9fa42c6a9b MainThread docker_pt(1/1) vm_util.py:363 INFO     Running: curl -o /tmp/pkb/svr-info-be9fa42c6a9b/svr-info-internal-2.0.1.tgz https://cumulus.s3.us-east-2.amazonaws.com/svr_info/svr-info-internal-2.0.1.tgz
2022-09-02 02:11:51,979 be9fa42c6a9b MainThread docker_pt(1/1) vm_util.py:426 DEBUG    Ran: {curl -o /tmp/pkb/svr-info-be9fa42c6a9b/svr-info-internal-2.0.1.tgz https://cumulus.s3.us-east-2.amazonaws.com/svr_info/svr-info-internal-2.0.1.tgz}
ReturnCode:0
STDOUT: 
STDERR:   % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed

  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  5 15.3M    5  798k    0     0   970k      0  0:00:16 --:--:--  0:00:16  970k
100 15.3M  100 15.3M    0     0  11.1M      0  0:00:01  0:00:01 --:--:-- 11.1M

2022-09-02 02:11:51,979 be9fa42c6a9b MainThread docker_pt(1/1) vm_util.py:363 INFO     Running: tar -C /tmp/pkb/svr-info-be9fa42c6a9b -xf /tmp/pkb/svr-info-be9fa42c6a9b/svr-info-internal-2.0.1.tgz
2022-09-02 02:11:52,180 be9fa42c6a9b MainThread docker_pt(1/1) vm_util.py:426 DEBUG    Ran: {tar -C /tmp/pkb/svr-info-be9fa42c6a9b -xf /tmp/pkb/svr-info-be9fa42c6a9b/svr-info-internal-2.0.1.tgz}
ReturnCode:0
STDOUT: 
STDERR: 
2022-09-02 02:11:52,181 be9fa42c6a9b Thread-35 (_ExecuteBackgroundThreadTasks) docker_pt(1/1) vm_util.py:363 INFO     Running: mkdir -p /tmp/pkb/runs/be9fa42c6a9b/pkb-be9fa42c6a9b-1-svrinfo
2022-09-02 02:11:52,181 be9fa42c6a9b Thread-36 (_ExecuteBackgroundThreadTasks) docker_pt(1/1) vm_util.py:363 INFO     Running: mkdir -p /tmp/pkb/runs/be9fa42c6a9b/pkb-be9fa42c6a9b-0-svrinfo
2022-09-02 02:11:52,183 be9fa42c6a9b Thread-36 (_ExecuteBackgroundThreadTasks) docker_pt(1/1) vm_util.py:426 DEBUG    Ran: {mkdir -p /tmp/pkb/runs/be9fa42c6a9b/pkb-be9fa42c6a9b-0-svrinfo}
ReturnCode:0
STDOUT: 
STDERR: 
2022-09-02 02:11:52,183 be9fa42c6a9b Thread-36 (_ExecuteBackgroundThreadTasks) docker_pt(1/1) vm_util.py:363 INFO     Running: ./svr-info -format all -output /tmp/pkb/runs/be9fa42c6a9b/pkb-be9fa42c6a9b-0-svrinfo -ip 3.75.137.230 -port 22 -user ubuntu -key /home/sut/runs/280b72753f6b/perfkitbenchmarker_keyfile
2022-09-02 02:11:52,184 be9fa42c6a9b Thread-35 (_ExecuteBackgroundThreadTasks) docker_pt(1/1) vm_util.py:426 DEBUG    Ran: {mkdir -p /tmp/pkb/runs/be9fa42c6a9b/pkb-be9fa42c6a9b-1-svrinfo}
ReturnCode:0
STDOUT: 
STDERR: 
2022-09-02 02:11:52,184 be9fa42c6a9b Thread-35 (_ExecuteBackgroundThreadTasks) docker_pt(1/1) vm_util.py:363 INFO     Running: ./svr-info -format all -output /tmp/pkb/runs/be9fa42c6a9b/pkb-be9fa42c6a9b-1-svrinfo -ip 3.120.235.131 -port 22 -user ubuntu -key /home/sut/runs/280b72753f6b/perfkitbenchmarker_keyfile
2022-09-02 02:12:05,735 be9fa42c6a9b Thread-36 (_ExecuteBackgroundThreadTasks) docker_pt(1/1) vm_util.py:426 DEBUG    Ran: {./svr-info -format all -output /tmp/pkb/runs/be9fa42c6a9b/pkb-be9fa42c6a9b-0-svrinfo -ip 3.75.137.230 -port 22 -user ubuntu -key /home/sut/runs/280b72753f6b/perfkitbenchmarker_keyfile}
ReturnCode:0
STDOUT: Reports:
  pkb-be9fa42c6a9b-0-svrinfo/3.75.137.230.html
  pkb-be9fa42c6a9b-0-svrinfo/3.75.137.230.json
  pkb-be9fa42c6a9b-0-svrinfo/3.75.137.230.xlsx
  pkb-be9fa42c6a9b-0-svrinfo/3.75.137.230.txt

STDERR: 3.75.137.230            collecting data                         
[1A3.75.137.230            collecting data                         
[1A3.75.137.230            collecting data                         
[1A3.75.137.230            collecting data                         
[1A3.75.137.230            collecting data                         
[1A3.75.137.230            collecting data                         
[1A3.75.137.230            collecting data                         
[1A3.75.137.230            collecting data                         
[1A3.75.137.230            collecting data                         
[1A3.75.137.230            collecting data                         
[1A3.75.137.230            collecting data                         
[1A3.75.137.230            collecting data                         
[1A3.75.137.230            collecting data                         
[1A3.75.137.230            collecting data                         
[1A3.75.137.230            collecting data                         
[1A3.75.137.230            collecting data                         
[1A3.75.137.230            collecting data                         
[1A3.75.137.230            collecting data                         
[1A3.75.137.230            collecting data                         
[1A3.75.137.230            collecting data                         
[1A3.75.137.230            collecting data                         
[1A3.75.137.230            collecting data                         
[1A3.75.137.230            collecting data                         
[1A3.75.137.230            collecting data                         
[1A3.75.137.230            collecting data                         
[1A3.75.137.230            collecting data                         
[1A3.75.137.230            collecting data                         
[1A3.75.137.230            collecting data                         
[1A3.75.137.230            collecting data                         
[1A3.75.137.230            collecting data                         
[1A3.75.137.230            collecting data                         
[1A3.75.137.230            collecting data                         
[1A3.75.137.230            collecting data                         
[1A3.75.137.230            collecting data                         
[1A3.75.137.230            collecting data                         
[1A3.75.137.230            collecting data                         
[1A3.75.137.230            collecting data                         
[1A3.75.137.230            collecting data                         
[1A3.75.137.230            collecting data                         
[1A3.75.137.230            collecting data                         
[1A3.75.137.230            collecting data                         
[1A3.75.137.230            collecting data                         
[1A3.75.137.230            collecting data                         
[1A3.75.137.230            collecting data                         
[1A3.75.137.230            collecting data                         
[1A3.75.137.230            collecting data                         
[1A3.75.137.230            collecting data                         
[1A3.75.137.230            collecting data                         
[1A3.75.137.230            collecting data                         
[1A3.75.137.230            collecting data                         
[1A3.75.137.230            collecting data                         
[1A3.75.137.230            collecting data                         
[1A3.75.137.230            collecting data                         
[1A3.75.137.230            collecting data                         
[1A3.75.137.230            finished creating report(s)             

2022-09-02 02:12:06,315 be9fa42c6a9b Thread-35 (_ExecuteBackgroundThreadTasks) docker_pt(1/1) vm_util.py:426 DEBUG    Ran: {./svr-info -format all -output /tmp/pkb/runs/be9fa42c6a9b/pkb-be9fa42c6a9b-1-svrinfo -ip 3.120.235.131 -port 22 -user ubuntu -key /home/sut/runs/280b72753f6b/perfkitbenchmarker_keyfile}
ReturnCode:0
STDOUT: Reports:
  pkb-be9fa42c6a9b-1-svrinfo/3.120.235.131.html
  pkb-be9fa42c6a9b-1-svrinfo/3.120.235.131.json
  pkb-be9fa42c6a9b-1-svrinfo/3.120.235.131.xlsx
  pkb-be9fa42c6a9b-1-svrinfo/3.120.235.131.txt

STDERR: 3.120.235.131           collecting data                         
[1A3.120.235.131           collecting data                         
[1A3.120.235.131           collecting data                         
[1A3.120.235.131           collecting data                         
[1A3.120.235.131           collecting data                         
[1A3.120.235.131           collecting data                         
[1A3.120.235.131           collecting data                         
[1A3.120.235.131           collecting data                         
[1A3.120.235.131           collecting data                         
[1A3.120.235.131           collecting data                         
[1A3.120.235.131           collecting data                         
[1A3.120.235.131           collecting data                         
[1A3.120.235.131           collecting data                         
[1A3.120.235.131           collecting data                         
[1A3.120.235.131           collecting data                         
[1A3.120.235.131           collecting data                         
[1A3.120.235.131           collecting data                         
[1A3.120.235.131           collecting data                         
[1A3.120.235.131           collecting data                         
[1A3.120.235.131           collecting data                         
[1A3.120.235.131           collecting data                         
[1A3.120.235.131           collecting data                         
[1A3.120.235.131           collecting data                         
[1A3.120.235.131           collecting data                         
[1A3.120.235.131           collecting data                         
[1A3.120.235.131           collecting data                         
[1A3.120.235.131           collecting data                         
[1A3.120.235.131           collecting data                         
[1A3.120.235.131           collecting data                         
[1A3.120.235.131           collecting data                         
[1A3.120.235.131           collecting data                         
[1A3.120.235.131           collecting data                         
[1A3.120.235.131           collecting data                         
[1A3.120.235.131           collecting data                         
[1A3.120.235.131           collecting data                         
[1A3.120.235.131           collecting data                         
[1A3.120.235.131           collecting data                         
[1A3.120.235.131           collecting data                         
[1A3.120.235.131           collecting data                         
[1A3.120.235.131           collecting data                         
[1A3.120.235.131           collecting data                         
[1A3.120.235.131           collecting data                         
[1A3.120.235.131           collecting data                         
[1A3.120.235.131           collecting data                         
[1A3.120.235.131           collecting data                         
[1A3.120.235.131           collecting data                         
[1A3.120.235.131           collecting data                         
[1A3.120.235.131           collecting data                         
[1A3.120.235.131           collecting data                         
[1A3.120.235.131           collecting data                         
[1A3.120.235.131           collecting data                         
[1A3.120.235.131           collecting data                         
[1A3.120.235.131           collecting data                         
[1A3.120.235.131           collecting data                         
[1A3.120.235.131           collecting data                         
[1A3.120.235.131           collecting data                         
[1A3.120.235.131           finished creating report(s)             

2022-09-02 02:12:06,348 be9fa42c6a9b MainThread docker_pt(1/1) vm_util.py:363 INFO     Running: rm -rf /tmp/pkb/svr-info-be9fa42c6a9b
2022-09-02 02:12:06,354 be9fa42c6a9b MainThread docker_pt(1/1) vm_util.py:426 DEBUG    Ran: {rm -rf /tmp/pkb/svr-info-be9fa42c6a9b}
ReturnCode:0
STDOUT: 
STDERR: 
2022-09-02 02:12:06,354 be9fa42c6a9b MainThread docker_pt(1/1) pkb.py:927 INFO     Installing traces...
2022-09-02 02:12:06,355 be9fa42c6a9b Thread-42 (_ExecuteBackgroundThreadTasks) docker_pt(1/1) vm_util.py:363 INFO     Running: ssh -A -p 22 ubuntu@3.120.235.131 -2 -o UserKnownHostsFile=/dev/null -o StrictHostKeyChecking=no -o IdentitiesOnly=no -o PreferredAuthentications=publickey -o PasswordAuthentication=no -o ConnectTimeout=5 -o GSSAPIAuthentication=no -o ServerAliveInterval=30 -o ServerAliveCountMax=10 -i /home/sut/runs/280b72753f6b/perfkitbenchmarker_keyfile -o ControlPath="/tmp/pkb/runs/be9fa42c6a9b/ssh/%h" -o ControlMaster=auto -o ControlPersist=30m -o TCPKeepAlive=yes sudo apt-get update
2022-09-02 02:12:06,355 be9fa42c6a9b Thread-43 (_ExecuteBackgroundThreadTasks) docker_pt(1/1) vm_util.py:363 INFO     Running: ssh -A -p 22 ubuntu@3.75.137.230 -2 -o UserKnownHostsFile=/dev/null -o StrictHostKeyChecking=no -o IdentitiesOnly=no -o PreferredAuthentications=publickey -o PasswordAuthentication=no -o ConnectTimeout=5 -o GSSAPIAuthentication=no -o ServerAliveInterval=30 -o ServerAliveCountMax=10 -i /home/sut/runs/280b72753f6b/perfkitbenchmarker_keyfile -o ControlPath="/tmp/pkb/runs/be9fa42c6a9b/ssh/%h" -o ControlMaster=auto -o ControlPersist=30m -o TCPKeepAlive=yes sudo apt-get update
2022-09-02 02:12:07,649 be9fa42c6a9b Thread-43 (_ExecuteBackgroundThreadTasks) docker_pt(1/1) vm_util.py:426 DEBUG    Ran: {ssh -A -p 22 ubuntu@3.75.137.230 -2 -o UserKnownHostsFile=/dev/null -o StrictHostKeyChecking=no -o IdentitiesOnly=no -o PreferredAuthentications=publickey -o PasswordAuthentication=no -o ConnectTimeout=5 -o GSSAPIAuthentication=no -o ServerAliveInterval=30 -o ServerAliveCountMax=10 -i /home/sut/runs/280b72753f6b/perfkitbenchmarker_keyfile -o ControlPath="/tmp/pkb/runs/be9fa42c6a9b/ssh/%h" -o ControlMaster=auto -o ControlPersist=30m -o TCPKeepAlive=yes sudo apt-get update}
ReturnCode:0
STDOUT: Hit:1 http://eu-central-1.ec2.archive.ubuntu.com/ubuntu jammy InRelease
Hit:2 http://eu-central-1.ec2.archive.ubuntu.com/ubuntu jammy-updates InRelease
Hit:3 http://eu-central-1.ec2.archive.ubuntu.com/ubuntu jammy-backports InRelease
Hit:4 https://download.docker.com/linux/ubuntu jammy InRelease
Get:5 http://security.ubuntu.com/ubuntu jammy-security InRelease [110 kB]
Hit:6 https://packages.cloud.google.com/apt kubernetes-xenial InRelease
Fetched 110 kB in 0s (297 kB/s)
Reading package lists...

STDERR: W: https://download.docker.com/linux/ubuntu/dists/jammy/InRelease: Key is stored in legacy trusted.gpg keyring (/etc/apt/trusted.gpg), see the DEPRECATION section in apt-key(8) for details.
W: http://apt.kubernetes.io/dists/kubernetes-xenial/InRelease: Key is stored in legacy trusted.gpg keyring (/etc/apt/trusted.gpg), see the DEPRECATION section in apt-key(8) for details.

2022-09-02 02:12:07,649 be9fa42c6a9b Thread-43 (_ExecuteBackgroundThreadTasks) docker_pt(1/1) vm_util.py:363 INFO     Running: ssh -A -p 22 ubuntu@3.75.137.230 -2 -o UserKnownHostsFile=/dev/null -o StrictHostKeyChecking=no -o IdentitiesOnly=no -o PreferredAuthentications=publickey -o PasswordAuthentication=no -o ConnectTimeout=5 -o GSSAPIAuthentication=no -o ServerAliveInterval=30 -o ServerAliveCountMax=10 -i /home/sut/runs/280b72753f6b/perfkitbenchmarker_keyfile -o ControlPath="/tmp/pkb/runs/be9fa42c6a9b/ssh/%h" -o ControlMaster=auto -o ControlPersist=30m -o TCPKeepAlive=yes sudo DEBIAN_FRONTEND='noninteractive' /usr/bin/apt-get -y install sysstat
2022-09-02 02:12:07,795 be9fa42c6a9b Thread-42 (_ExecuteBackgroundThreadTasks) docker_pt(1/1) vm_util.py:426 DEBUG    Ran: {ssh -A -p 22 ubuntu@3.120.235.131 -2 -o UserKnownHostsFile=/dev/null -o StrictHostKeyChecking=no -o IdentitiesOnly=no -o PreferredAuthentications=publickey -o PasswordAuthentication=no -o ConnectTimeout=5 -o GSSAPIAuthentication=no -o ServerAliveInterval=30 -o ServerAliveCountMax=10 -i /home/sut/runs/280b72753f6b/perfkitbenchmarker_keyfile -o ControlPath="/tmp/pkb/runs/be9fa42c6a9b/ssh/%h" -o ControlMaster=auto -o ControlPersist=30m -o TCPKeepAlive=yes sudo apt-get update}
ReturnCode:0
STDOUT: Hit:1 http://eu-central-1.ec2.archive.ubuntu.com/ubuntu jammy InRelease
Hit:2 http://eu-central-1.ec2.archive.ubuntu.com/ubuntu jammy-updates InRelease
Hit:3 http://eu-central-1.ec2.archive.ubuntu.com/ubuntu jammy-backports InRelease
Hit:4 https://download.docker.com/linux/ubuntu jammy InRelease
Hit:5 https://packages.cloud.google.com/apt kubernetes-xenial InRelease
Get:6 http://security.ubuntu.com/ubuntu jammy-security InRelease [110 kB]
Fetched 110 kB in 1s (210 kB/s)
Reading package lists...

STDERR: W: https://download.docker.com/linux/ubuntu/dists/jammy/InRelease: Key is stored in legacy trusted.gpg keyring (/etc/apt/trusted.gpg), see the DEPRECATION section in apt-key(8) for details.
W: http://apt.kubernetes.io/dists/kubernetes-xenial/InRelease: Key is stored in legacy trusted.gpg keyring (/etc/apt/trusted.gpg), see the DEPRECATION section in apt-key(8) for details.

2022-09-02 02:12:07,795 be9fa42c6a9b Thread-42 (_ExecuteBackgroundThreadTasks) docker_pt(1/1) vm_util.py:363 INFO     Running: ssh -A -p 22 ubuntu@3.120.235.131 -2 -o UserKnownHostsFile=/dev/null -o StrictHostKeyChecking=no -o IdentitiesOnly=no -o PreferredAuthentications=publickey -o PasswordAuthentication=no -o ConnectTimeout=5 -o GSSAPIAuthentication=no -o ServerAliveInterval=30 -o ServerAliveCountMax=10 -i /home/sut/runs/280b72753f6b/perfkitbenchmarker_keyfile -o ControlPath="/tmp/pkb/runs/be9fa42c6a9b/ssh/%h" -o ControlMaster=auto -o ControlPersist=30m -o TCPKeepAlive=yes sudo DEBIAN_FRONTEND='noninteractive' /usr/bin/apt-get -y install sysstat
2022-09-02 02:12:08,270 be9fa42c6a9b Thread-43 (_ExecuteBackgroundThreadTasks) docker_pt(1/1) vm_util.py:426 DEBUG    Ran: {ssh -A -p 22 ubuntu@3.75.137.230 -2 -o UserKnownHostsFile=/dev/null -o StrictHostKeyChecking=no -o IdentitiesOnly=no -o PreferredAuthentications=publickey -o PasswordAuthentication=no -o ConnectTimeout=5 -o GSSAPIAuthentication=no -o ServerAliveInterval=30 -o ServerAliveCountMax=10 -i /home/sut/runs/280b72753f6b/perfkitbenchmarker_keyfile -o ControlPath="/tmp/pkb/runs/be9fa42c6a9b/ssh/%h" -o ControlMaster=auto -o ControlPersist=30m -o TCPKeepAlive=yes sudo DEBIAN_FRONTEND='noninteractive' /usr/bin/apt-get -y install sysstat}
ReturnCode:0
STDOUT: Reading package lists...
Building dependency tree...
Reading state information...
sysstat is already the newest version (12.5.2-2build2).
0 upgraded, 0 newly installed, 0 to remove and 4 not upgraded.

STDERR: 
2022-09-02 02:12:08,417 be9fa42c6a9b Thread-42 (_ExecuteBackgroundThreadTasks) docker_pt(1/1) vm_util.py:426 DEBUG    Ran: {ssh -A -p 22 ubuntu@3.120.235.131 -2 -o UserKnownHostsFile=/dev/null -o StrictHostKeyChecking=no -o IdentitiesOnly=no -o PreferredAuthentications=publickey -o PasswordAuthentication=no -o ConnectTimeout=5 -o GSSAPIAuthentication=no -o ServerAliveInterval=30 -o ServerAliveCountMax=10 -i /home/sut/runs/280b72753f6b/perfkitbenchmarker_keyfile -o ControlPath="/tmp/pkb/runs/be9fa42c6a9b/ssh/%h" -o ControlMaster=auto -o ControlPersist=30m -o TCPKeepAlive=yes sudo DEBIAN_FRONTEND='noninteractive' /usr/bin/apt-get -y install sysstat}
ReturnCode:0
STDOUT: Reading package lists...
Building dependency tree...
Reading state information...
sysstat is already the newest version (12.5.2-2build2).
0 upgraded, 0 newly installed, 0 to remove and 4 not upgraded.

STDERR: 
2022-09-02 02:12:08,438 be9fa42c6a9b MainThread docker_pt(1/1) pkb.py:950 INFO     Running benchmark dlrm_pytorch_epyc_facebook
2022-09-02 02:12:08,439 be9fa42c6a9b MainThread docker_pt(1/1) vm_util.py:363 INFO     Running: ssh -A -p 22 ubuntu@3.75.137.230 -2 -o UserKnownHostsFile=/dev/null -o StrictHostKeyChecking=no -o IdentitiesOnly=no -o PreferredAuthentications=publickey -o PasswordAuthentication=no -o ConnectTimeout=5 -o GSSAPIAuthentication=no -o ServerAliveInterval=30 -o ServerAliveCountMax=10 -i /home/sut/runs/280b72753f6b/perfkitbenchmarker_keyfile -o ControlPath="/tmp/pkb/runs/be9fa42c6a9b/ssh/%h" -o ControlMaster=auto -o ControlPersist=30m -o TCPKeepAlive=yes cat /proc/cpuinfo | grep processor | wc -l
2022-09-02 02:12:08,791 be9fa42c6a9b MainThread docker_pt(1/1) vm_util.py:426 DEBUG    Ran: {ssh -A -p 22 ubuntu@3.75.137.230 -2 -o UserKnownHostsFile=/dev/null -o StrictHostKeyChecking=no -o IdentitiesOnly=no -o PreferredAuthentications=publickey -o PasswordAuthentication=no -o ConnectTimeout=5 -o GSSAPIAuthentication=no -o ServerAliveInterval=30 -o ServerAliveCountMax=10 -i /home/sut/runs/280b72753f6b/perfkitbenchmarker_keyfile -o ControlPath="/tmp/pkb/runs/be9fa42c6a9b/ssh/%h" -o ControlMaster=auto -o ControlPersist=30m -o TCPKeepAlive=yes cat /proc/cpuinfo | grep processor | wc -l}
ReturnCode:0
STDOUT: 16

STDERR: 
2022-09-02 02:12:08,791 be9fa42c6a9b MainThread docker_pt(1/1) docker_passthrough.py:634 DEBUG    VM thread count: 16
2022-09-02 02:12:08,791 be9fa42c6a9b MainThread docker_pt(1/1) vm_util.py:363 INFO     Running: ssh -A -p 22 ubuntu@3.120.235.131 -2 -o UserKnownHostsFile=/dev/null -o StrictHostKeyChecking=no -o IdentitiesOnly=no -o PreferredAuthentications=publickey -o PasswordAuthentication=no -o ConnectTimeout=5 -o GSSAPIAuthentication=no -o ServerAliveInterval=30 -o ServerAliveCountMax=10 -i /home/sut/runs/280b72753f6b/perfkitbenchmarker_keyfile -o ControlPath="/tmp/pkb/runs/be9fa42c6a9b/ssh/%h" -o ControlMaster=auto -o ControlPersist=30m -o TCPKeepAlive=yes cat /proc/cpuinfo | grep processor | wc -l
2022-09-02 02:12:09,121 be9fa42c6a9b MainThread docker_pt(1/1) vm_util.py:426 DEBUG    Ran: {ssh -A -p 22 ubuntu@3.120.235.131 -2 -o UserKnownHostsFile=/dev/null -o StrictHostKeyChecking=no -o IdentitiesOnly=no -o PreferredAuthentications=publickey -o PasswordAuthentication=no -o ConnectTimeout=5 -o GSSAPIAuthentication=no -o ServerAliveInterval=30 -o ServerAliveCountMax=10 -i /home/sut/runs/280b72753f6b/perfkitbenchmarker_keyfile -o ControlPath="/tmp/pkb/runs/be9fa42c6a9b/ssh/%h" -o ControlMaster=auto -o ControlPersist=30m -o TCPKeepAlive=yes cat /proc/cpuinfo | grep processor | wc -l}
ReturnCode:0
STDOUT: 64

STDERR: 
2022-09-02 02:12:09,121 be9fa42c6a9b MainThread docker_pt(1/1) docker_passthrough.py:634 DEBUG    VM thread count: 64
2022-09-02 02:12:09,121 be9fa42c6a9b MainThread docker_pt(1/1) vm_util.py:363 INFO     Running: ssh -A -p 22 ubuntu@3.75.137.230 -2 -o UserKnownHostsFile=/dev/null -o StrictHostKeyChecking=no -o IdentitiesOnly=no -o PreferredAuthentications=publickey -o PasswordAuthentication=no -o ConnectTimeout=5 -o GSSAPIAuthentication=no -o ServerAliveInterval=30 -o ServerAliveCountMax=10 -i /home/sut/runs/280b72753f6b/perfkitbenchmarker_keyfile -o ControlPath="/tmp/pkb/runs/be9fa42c6a9b/ssh/%h" -o ControlMaster=auto -o ControlPersist=30m -o TCPKeepAlive=yes kubectl create namespace root-9b7faf1c1f60
2022-09-02 02:12:09,495 be9fa42c6a9b MainThread docker_pt(1/1) vm_util.py:426 DEBUG    Ran: {ssh -A -p 22 ubuntu@3.75.137.230 -2 -o UserKnownHostsFile=/dev/null -o StrictHostKeyChecking=no -o IdentitiesOnly=no -o PreferredAuthentications=publickey -o PasswordAuthentication=no -o ConnectTimeout=5 -o GSSAPIAuthentication=no -o ServerAliveInterval=30 -o ServerAliveCountMax=10 -i /home/sut/runs/280b72753f6b/perfkitbenchmarker_keyfile -o ControlPath="/tmp/pkb/runs/be9fa42c6a9b/ssh/%h" -o ControlMaster=auto -o ControlPersist=30m -o TCPKeepAlive=yes kubectl create namespace root-9b7faf1c1f60}
ReturnCode:0
STDOUT: namespace/root-9b7faf1c1f60 created

STDERR: 
2022-09-02 02:12:09,495 be9fa42c6a9b MainThread docker_pt(1/1) vm_util.py:363 INFO     Running: ssh -A -p 22 ubuntu@3.75.137.230 -2 -o UserKnownHostsFile=/dev/null -o StrictHostKeyChecking=no -o IdentitiesOnly=no -o PreferredAuthentications=publickey -o PasswordAuthentication=no -o ConnectTimeout=5 -o GSSAPIAuthentication=no -o ServerAliveInterval=30 -o ServerAliveCountMax=10 -i /home/sut/runs/280b72753f6b/perfkitbenchmarker_keyfile -o ControlPath="/tmp/pkb/runs/be9fa42c6a9b/ssh/%h" -o ControlMaster=auto -o ControlPersist=30m -o TCPKeepAlive=yes kubectl label namespace root-9b7faf1c1f60 cn-benchmarking.intel.com/sf_namespace=true
2022-09-02 02:12:09,872 be9fa42c6a9b MainThread docker_pt(1/1) vm_util.py:426 DEBUG    Ran: {ssh -A -p 22 ubuntu@3.75.137.230 -2 -o UserKnownHostsFile=/dev/null -o StrictHostKeyChecking=no -o IdentitiesOnly=no -o PreferredAuthentications=publickey -o PasswordAuthentication=no -o ConnectTimeout=5 -o GSSAPIAuthentication=no -o ServerAliveInterval=30 -o ServerAliveCountMax=10 -i /home/sut/runs/280b72753f6b/perfkitbenchmarker_keyfile -o ControlPath="/tmp/pkb/runs/be9fa42c6a9b/ssh/%h" -o ControlMaster=auto -o ControlPersist=30m -o TCPKeepAlive=yes kubectl label namespace root-9b7faf1c1f60 cn-benchmarking.intel.com/sf_namespace=true}
ReturnCode:0
STDOUT: namespace/root-9b7faf1c1f60 labeled

STDERR: 
2022-09-02 02:12:09,873 be9fa42c6a9b MainThread docker_pt(1/1) vm_util.py:363 INFO     Running: ssh -A -p 22 ubuntu@3.75.137.230 -2 -o UserKnownHostsFile=/dev/null -o StrictHostKeyChecking=no -o IdentitiesOnly=no -o PreferredAuthentications=publickey -o PasswordAuthentication=no -o ConnectTimeout=5 -o GSSAPIAuthentication=no -o ServerAliveInterval=30 -o ServerAliveCountMax=10 -i /home/sut/runs/280b72753f6b/perfkitbenchmarker_keyfile -o ControlPath="/tmp/pkb/runs/be9fa42c6a9b/ssh/%h" -o ControlMaster=auto -o ControlPersist=30m -o TCPKeepAlive=yes kubectl create --namespace=root-9b7faf1c1f60 -f /opt/pkb/root-9b7faf1c1f60/kubernetes_config.yaml
2022-09-02 02:12:10,330 be9fa42c6a9b MainThread docker_pt(1/1) vm_util.py:426 DEBUG    Ran: {ssh -A -p 22 ubuntu@3.75.137.230 -2 -o UserKnownHostsFile=/dev/null -o StrictHostKeyChecking=no -o IdentitiesOnly=no -o PreferredAuthentications=publickey -o PasswordAuthentication=no -o ConnectTimeout=5 -o GSSAPIAuthentication=no -o ServerAliveInterval=30 -o ServerAliveCountMax=10 -i /home/sut/runs/280b72753f6b/perfkitbenchmarker_keyfile -o ControlPath="/tmp/pkb/runs/be9fa42c6a9b/ssh/%h" -o ControlMaster=auto -o ControlPersist=30m -o TCPKeepAlive=yes kubectl create --namespace=root-9b7faf1c1f60 -f /opt/pkb/root-9b7faf1c1f60/kubernetes_config.yaml}
ReturnCode:0
STDOUT: job.batch/dlrm-pytorch-epyc-facebook-benchmark created

STDERR: 
2022-09-02 02:12:10,330 be9fa42c6a9b MainThread docker_pt(1/1) vm_util.py:363 INFO     Running: ssh -A -p 22 ubuntu@3.75.137.230 -2 -o UserKnownHostsFile=/dev/null -o StrictHostKeyChecking=no -o IdentitiesOnly=no -o PreferredAuthentications=publickey -o PasswordAuthentication=no -o ConnectTimeout=5 -o GSSAPIAuthentication=no -o ServerAliveInterval=30 -o ServerAliveCountMax=10 -i /home/sut/runs/280b72753f6b/perfkitbenchmarker_keyfile -o ControlPath="/tmp/pkb/runs/be9fa42c6a9b/ssh/%h" -o ControlMaster=auto -o ControlPersist=30m -o TCPKeepAlive=yes bash -c 'q=0;until kubectl --namespace=root-9b7faf1c1f60 wait pod --all --for=condition=Ready --timeout=1s 1>/dev/null 2>&1; do if kubectl --namespace=root-9b7faf1c1f60 get pod -o json | grep -q Unschedulable; then q=1; break; fi; done; exit $q'
2022-09-02 02:12:11,254 be9fa42c6a9b MainThread docker_pt(1/1) vm_util.py:426 DEBUG    Ran: {ssh -A -p 22 ubuntu@3.75.137.230 -2 -o UserKnownHostsFile=/dev/null -o StrictHostKeyChecking=no -o IdentitiesOnly=no -o PreferredAuthentications=publickey -o PasswordAuthentication=no -o ConnectTimeout=5 -o GSSAPIAuthentication=no -o ServerAliveInterval=30 -o ServerAliveCountMax=10 -i /home/sut/runs/280b72753f6b/perfkitbenchmarker_keyfile -o ControlPath="/tmp/pkb/runs/be9fa42c6a9b/ssh/%h" -o ControlMaster=auto -o ControlPersist=30m -o TCPKeepAlive=yes bash -c 'q=0;until kubectl --namespace=root-9b7faf1c1f60 wait pod --all --for=condition=Ready --timeout=1s 1>/dev/null 2>&1; do if kubectl --namespace=root-9b7faf1c1f60 get pod -o json | grep -q Unschedulable; then q=1; break; fi; done; exit $q'}
ReturnCode:0
STDOUT: 
STDERR: 
2022-09-02 02:12:11,255 be9fa42c6a9b MainThread docker_pt(1/1) vm_util.py:363 INFO     Running: ssh -A -p 22 ubuntu@3.75.137.230 -2 -o UserKnownHostsFile=/dev/null -o StrictHostKeyChecking=no -o IdentitiesOnly=no -o PreferredAuthentications=publickey -o PasswordAuthentication=no -o ConnectTimeout=5 -o GSSAPIAuthentication=no -o ServerAliveInterval=30 -o ServerAliveCountMax=10 -i /home/sut/runs/280b72753f6b/perfkitbenchmarker_keyfile -o ControlPath="/tmp/pkb/runs/be9fa42c6a9b/ssh/%h" -o ControlMaster=auto -o ControlPersist=30m -o TCPKeepAlive=yes kubectl get --namespace=root-9b7faf1c1f60 pod --selector=job-name=dlrm-pytorch-epyc-facebook-benchmark '-o=jsonpath={.items[*].metadata.name}'
2022-09-02 02:12:11,633 be9fa42c6a9b MainThread docker_pt(1/1) vm_util.py:426 DEBUG    Ran: {ssh -A -p 22 ubuntu@3.75.137.230 -2 -o UserKnownHostsFile=/dev/null -o StrictHostKeyChecking=no -o IdentitiesOnly=no -o PreferredAuthentications=publickey -o PasswordAuthentication=no -o ConnectTimeout=5 -o GSSAPIAuthentication=no -o ServerAliveInterval=30 -o ServerAliveCountMax=10 -i /home/sut/runs/280b72753f6b/perfkitbenchmarker_keyfile -o ControlPath="/tmp/pkb/runs/be9fa42c6a9b/ssh/%h" -o ControlMaster=auto -o ControlPersist=30m -o TCPKeepAlive=yes kubectl get --namespace=root-9b7faf1c1f60 pod --selector=job-name=dlrm-pytorch-epyc-facebook-benchmark '-o=jsonpath={.items[*].metadata.name}'}
ReturnCode:0
STDOUT: dlrm-pytorch-epyc-facebook-benchmark-8gzzk
STDERR: 
2022-09-02 02:12:11,634 be9fa42c6a9b Thread-55 (_ExecuteBackgroundThreadTasks) docker_pt(1/1) base_collector.py:112 INFO     Starting sar on pkb-be9fa42c6a9b-1 @ 3.120.235.131
2022-09-02 02:12:11,634 be9fa42c6a9b Thread-56 (_ExecuteBackgroundThreadTasks) docker_pt(1/1) base_collector.py:112 INFO     Starting sar on pkb-be9fa42c6a9b-0 @ 3.75.137.230
2022-09-02 02:12:11,634 be9fa42c6a9b Thread-55 (_ExecuteBackgroundThreadTasks) docker_pt(1/1) vm_util.py:363 INFO     Running: ssh -A -p 22 ubuntu@3.120.235.131 -2 -o UserKnownHostsFile=/dev/null -o StrictHostKeyChecking=no -o IdentitiesOnly=no -o PreferredAuthentications=publickey -o PasswordAuthentication=no -o ConnectTimeout=5 -o GSSAPIAuthentication=no -o ServerAliveInterval=30 -o ServerAliveCountMax=10 -i /home/sut/runs/280b72753f6b/perfkitbenchmarker_keyfile -o ControlPath="/tmp/pkb/runs/be9fa42c6a9b/ssh/%h" -o ControlMaster=auto -o ControlPersist=30m -o TCPKeepAlive=yes sar -u -r -m CPU -P ALL 1  > /tmp/pkb/pkb-be9fa42c6a9b-1-docker_pt0-6b601438-sar.stdout 2>&1 & echo $!
2022-09-02 02:12:11,634 be9fa42c6a9b Thread-56 (_ExecuteBackgroundThreadTasks) docker_pt(1/1) vm_util.py:363 INFO     Running: ssh -A -p 22 ubuntu@3.75.137.230 -2 -o UserKnownHostsFile=/dev/null -o StrictHostKeyChecking=no -o IdentitiesOnly=no -o PreferredAuthentications=publickey -o PasswordAuthentication=no -o ConnectTimeout=5 -o GSSAPIAuthentication=no -o ServerAliveInterval=30 -o ServerAliveCountMax=10 -i /home/sut/runs/280b72753f6b/perfkitbenchmarker_keyfile -o ControlPath="/tmp/pkb/runs/be9fa42c6a9b/ssh/%h" -o ControlMaster=auto -o ControlPersist=30m -o TCPKeepAlive=yes sar -u -r -m CPU -P ALL 1  > /tmp/pkb/pkb-be9fa42c6a9b-0-docker_pt0-6b601438-sar.stdout 2>&1 & echo $!
2022-09-02 02:12:11,944 be9fa42c6a9b Thread-55 (_ExecuteBackgroundThreadTasks) docker_pt(1/1) vm_util.py:426 DEBUG    Ran: {ssh -A -p 22 ubuntu@3.120.235.131 -2 -o UserKnownHostsFile=/dev/null -o StrictHostKeyChecking=no -o IdentitiesOnly=no -o PreferredAuthentications=publickey -o PasswordAuthentication=no -o ConnectTimeout=5 -o GSSAPIAuthentication=no -o ServerAliveInterval=30 -o ServerAliveCountMax=10 -i /home/sut/runs/280b72753f6b/perfkitbenchmarker_keyfile -o ControlPath="/tmp/pkb/runs/be9fa42c6a9b/ssh/%h" -o ControlMaster=auto -o ControlPersist=30m -o TCPKeepAlive=yes sar -u -r -m CPU -P ALL 1  > /tmp/pkb/pkb-be9fa42c6a9b-1-docker_pt0-6b601438-sar.stdout 2>&1 & echo $!}
ReturnCode:0
STDOUT: 419439

STDERR: 
2022-09-02 02:12:11,960 be9fa42c6a9b Thread-56 (_ExecuteBackgroundThreadTasks) docker_pt(1/1) vm_util.py:426 DEBUG    Ran: {ssh -A -p 22 ubuntu@3.75.137.230 -2 -o UserKnownHostsFile=/dev/null -o StrictHostKeyChecking=no -o IdentitiesOnly=no -o PreferredAuthentications=publickey -o PasswordAuthentication=no -o ConnectTimeout=5 -o GSSAPIAuthentication=no -o ServerAliveInterval=30 -o ServerAliveCountMax=10 -i /home/sut/runs/280b72753f6b/perfkitbenchmarker_keyfile -o ControlPath="/tmp/pkb/runs/be9fa42c6a9b/ssh/%h" -o ControlMaster=auto -o ControlPersist=30m -o TCPKeepAlive=yes sar -u -r -m CPU -P ALL 1  > /tmp/pkb/pkb-be9fa42c6a9b-0-docker_pt0-6b601438-sar.stdout 2>&1 & echo $!}
ReturnCode:0
STDOUT: 463816

STDERR: 
2022-09-02 02:12:11,964 be9fa42c6a9b MainThread docker_pt(1/1) vm_util.py:363 INFO     Running: ssh -A -p 22 ubuntu@3.75.137.230 -2 -o UserKnownHostsFile=/dev/null -o StrictHostKeyChecking=no -o IdentitiesOnly=no -o PreferredAuthentications=publickey -o PasswordAuthentication=no -o ConnectTimeout=5 -o GSSAPIAuthentication=no -o ServerAliveInterval=30 -o ServerAliveCountMax=10 -i /home/sut/runs/280b72753f6b/perfkitbenchmarker_keyfile -o ControlPath="/tmp/pkb/runs/be9fa42c6a9b/ssh/%h" -o ControlMaster=auto -o ControlPersist=30m -o TCPKeepAlive=yes bash -c 'r=0;kubectl exec --namespace=root-9b7faf1c1f60 dlrm-pytorch-epyc-facebook-benchmark-8gzzk -c dlrm-pytorch-epyc-facebook-benchmark -- sh -c "cat /export-logs > ~/export-logs.tar";x=$?;test $x -ne 0 && r=$x;exit $r'
2022-09-02 02:12:22,370 be9fa42c6a9b MainThread docker_pt(1/1) vm_util.py:426 DEBUG    Ran: {ssh -A -p 22 ubuntu@3.75.137.230 -2 -o UserKnownHostsFile=/dev/null -o StrictHostKeyChecking=no -o IdentitiesOnly=no -o PreferredAuthentications=publickey -o PasswordAuthentication=no -o ConnectTimeout=5 -o GSSAPIAuthentication=no -o ServerAliveInterval=30 -o ServerAliveCountMax=10 -i /home/sut/runs/280b72753f6b/perfkitbenchmarker_keyfile -o ControlPath="/tmp/pkb/runs/be9fa42c6a9b/ssh/%h" -o ControlMaster=auto -o ControlPersist=30m -o TCPKeepAlive=yes bash -c 'r=0;kubectl exec --namespace=root-9b7faf1c1f60 dlrm-pytorch-epyc-facebook-benchmark-8gzzk -c dlrm-pytorch-epyc-facebook-benchmark -- sh -c "cat /export-logs > ~/export-logs.tar";x=$?;test $x -ne 0 && r=$x;exit $r'}
ReturnCode:0
STDOUT: 
STDERR: 
2022-09-02 02:12:22,370 be9fa42c6a9b MainThread docker_pt(1/1) vm_util.py:363 INFO     Running: ssh -A -p 22 ubuntu@3.75.137.230 -2 -o UserKnownHostsFile=/dev/null -o StrictHostKeyChecking=no -o IdentitiesOnly=no -o PreferredAuthentications=publickey -o PasswordAuthentication=no -o ConnectTimeout=5 -o GSSAPIAuthentication=no -o ServerAliveInterval=30 -o ServerAliveCountMax=10 -i /home/sut/runs/280b72753f6b/perfkitbenchmarker_keyfile -o ControlPath="/tmp/pkb/runs/be9fa42c6a9b/ssh/%h" -o ControlMaster=auto -o ControlPersist=30m -o TCPKeepAlive=yes kubectl exec --namespace=root-9b7faf1c1f60 -c dlrm-pytorch-epyc-facebook-benchmark dlrm-pytorch-epyc-facebook-benchmark-8gzzk -- sh -c "cat ~/export-logs.tar" > /opt/pkb/root-9b7faf1c1f60/dlrm-pytorch-epyc-facebook-benchmark-8gzzk.tar && tar xf /opt/pkb/root-9b7faf1c1f60/dlrm-pytorch-epyc-facebook-benchmark-8gzzk.tar -O > /dev/null
2022-09-02 02:12:22,826 be9fa42c6a9b MainThread docker_pt(1/1) vm_util.py:426 DEBUG    Ran: {ssh -A -p 22 ubuntu@3.75.137.230 -2 -o UserKnownHostsFile=/dev/null -o StrictHostKeyChecking=no -o IdentitiesOnly=no -o PreferredAuthentications=publickey -o PasswordAuthentication=no -o ConnectTimeout=5 -o GSSAPIAuthentication=no -o ServerAliveInterval=30 -o ServerAliveCountMax=10 -i /home/sut/runs/280b72753f6b/perfkitbenchmarker_keyfile -o ControlPath="/tmp/pkb/runs/be9fa42c6a9b/ssh/%h" -o ControlMaster=auto -o ControlPersist=30m -o TCPKeepAlive=yes kubectl exec --namespace=root-9b7faf1c1f60 -c dlrm-pytorch-epyc-facebook-benchmark dlrm-pytorch-epyc-facebook-benchmark-8gzzk -- sh -c "cat ~/export-logs.tar" > /opt/pkb/root-9b7faf1c1f60/dlrm-pytorch-epyc-facebook-benchmark-8gzzk.tar && tar xf /opt/pkb/root-9b7faf1c1f60/dlrm-pytorch-epyc-facebook-benchmark-8gzzk.tar -O > /dev/null}
ReturnCode:0
STDOUT: 
STDERR: 
2022-09-02 02:12:22,827 be9fa42c6a9b Thread-62 (_ExecuteBackgroundThreadTasks) docker_pt(1/1) vm_util.py:363 INFO     Running: ssh -A -p 22 ubuntu@3.75.137.230 -2 -o UserKnownHostsFile=/dev/null -o StrictHostKeyChecking=no -o IdentitiesOnly=no -o PreferredAuthentications=publickey -o PasswordAuthentication=no -o ConnectTimeout=5 -o GSSAPIAuthentication=no -o ServerAliveInterval=30 -o ServerAliveCountMax=10 -i /home/sut/runs/280b72753f6b/perfkitbenchmarker_keyfile -o ControlPath="/tmp/pkb/runs/be9fa42c6a9b/ssh/%h" -o ControlMaster=auto -o ControlPersist=30m -o TCPKeepAlive=yes kill 463816
2022-09-02 02:12:22,827 be9fa42c6a9b Thread-61 (_ExecuteBackgroundThreadTasks) docker_pt(1/1) vm_util.py:363 INFO     Running: ssh -A -p 22 ubuntu@3.120.235.131 -2 -o UserKnownHostsFile=/dev/null -o StrictHostKeyChecking=no -o IdentitiesOnly=no -o PreferredAuthentications=publickey -o PasswordAuthentication=no -o ConnectTimeout=5 -o GSSAPIAuthentication=no -o ServerAliveInterval=30 -o ServerAliveCountMax=10 -i /home/sut/runs/280b72753f6b/perfkitbenchmarker_keyfile -o ControlPath="/tmp/pkb/runs/be9fa42c6a9b/ssh/%h" -o ControlMaster=auto -o ControlPersist=30m -o TCPKeepAlive=yes kill 419439
2022-09-02 02:12:23,139 be9fa42c6a9b Thread-61 (_ExecuteBackgroundThreadTasks) docker_pt(1/1) vm_util.py:426 DEBUG    Ran: {ssh -A -p 22 ubuntu@3.120.235.131 -2 -o UserKnownHostsFile=/dev/null -o StrictHostKeyChecking=no -o IdentitiesOnly=no -o PreferredAuthentications=publickey -o PasswordAuthentication=no -o ConnectTimeout=5 -o GSSAPIAuthentication=no -o ServerAliveInterval=30 -o ServerAliveCountMax=10 -i /home/sut/runs/280b72753f6b/perfkitbenchmarker_keyfile -o ControlPath="/tmp/pkb/runs/be9fa42c6a9b/ssh/%h" -o ControlMaster=auto -o ControlPersist=30m -o TCPKeepAlive=yes kill 419439}
ReturnCode:0
STDOUT: 
STDERR: 
2022-09-02 02:12:23,139 be9fa42c6a9b Thread-61 (_ExecuteBackgroundThreadTasks) docker_pt(1/1) vm_util.py:363 INFO     Running: scp -P 22 -pr -2 -o UserKnownHostsFile=/dev/null -o StrictHostKeyChecking=no -o IdentitiesOnly=no -o PreferredAuthentications=publickey -o PasswordAuthentication=no -o ConnectTimeout=30 -o GSSAPIAuthentication=no -o ServerAliveInterval=30 -o ServerAliveCountMax=10 -i /home/sut/runs/280b72753f6b/perfkitbenchmarker_keyfile -o ControlPath="/tmp/pkb/runs/be9fa42c6a9b/ssh/%h" -o ControlMaster=auto -o ControlPersist=30m -o TCPKeepAlive=yes ubuntu@[3.120.235.131]:/tmp/pkb/pkb-be9fa42c6a9b-1-docker_pt0-6b601438-sar.stdout /tmp/pkb/runs/be9fa42c6a9b
2022-09-02 02:12:23,153 be9fa42c6a9b Thread-62 (_ExecuteBackgroundThreadTasks) docker_pt(1/1) vm_util.py:426 DEBUG    Ran: {ssh -A -p 22 ubuntu@3.75.137.230 -2 -o UserKnownHostsFile=/dev/null -o StrictHostKeyChecking=no -o IdentitiesOnly=no -o PreferredAuthentications=publickey -o PasswordAuthentication=no -o ConnectTimeout=5 -o GSSAPIAuthentication=no -o ServerAliveInterval=30 -o ServerAliveCountMax=10 -i /home/sut/runs/280b72753f6b/perfkitbenchmarker_keyfile -o ControlPath="/tmp/pkb/runs/be9fa42c6a9b/ssh/%h" -o ControlMaster=auto -o ControlPersist=30m -o TCPKeepAlive=yes kill 463816}
ReturnCode:0
STDOUT: 
STDERR: 
2022-09-02 02:12:23,153 be9fa42c6a9b Thread-62 (_ExecuteBackgroundThreadTasks) docker_pt(1/1) vm_util.py:363 INFO     Running: scp -P 22 -pr -2 -o UserKnownHostsFile=/dev/null -o StrictHostKeyChecking=no -o IdentitiesOnly=no -o PreferredAuthentications=publickey -o PasswordAuthentication=no -o ConnectTimeout=30 -o GSSAPIAuthentication=no -o ServerAliveInterval=30 -o ServerAliveCountMax=10 -i /home/sut/runs/280b72753f6b/perfkitbenchmarker_keyfile -o ControlPath="/tmp/pkb/runs/be9fa42c6a9b/ssh/%h" -o ControlMaster=auto -o ControlPersist=30m -o TCPKeepAlive=yes ubuntu@[3.75.137.230]:/tmp/pkb/pkb-be9fa42c6a9b-0-docker_pt0-6b601438-sar.stdout /tmp/pkb/runs/be9fa42c6a9b
2022-09-02 02:12:24,322 be9fa42c6a9b Thread-62 (_ExecuteBackgroundThreadTasks) docker_pt(1/1) vm_util.py:426 DEBUG    Ran: {scp -P 22 -pr -2 -o UserKnownHostsFile=/dev/null -o StrictHostKeyChecking=no -o IdentitiesOnly=no -o PreferredAuthentications=publickey -o PasswordAuthentication=no -o ConnectTimeout=30 -o GSSAPIAuthentication=no -o ServerAliveInterval=30 -o ServerAliveCountMax=10 -i /home/sut/runs/280b72753f6b/perfkitbenchmarker_keyfile -o ControlPath="/tmp/pkb/runs/be9fa42c6a9b/ssh/%h" -o ControlMaster=auto -o ControlPersist=30m -o TCPKeepAlive=yes ubuntu@[3.75.137.230]:/tmp/pkb/pkb-be9fa42c6a9b-0-docker_pt0-6b601438-sar.stdout /tmp/pkb/runs/be9fa42c6a9b}
ReturnCode:0
STDOUT: 
STDERR: 
2022-09-02 02:12:24,391 be9fa42c6a9b Thread-61 (_ExecuteBackgroundThreadTasks) docker_pt(1/1) vm_util.py:426 DEBUG    Ran: {scp -P 22 -pr -2 -o UserKnownHostsFile=/dev/null -o StrictHostKeyChecking=no -o IdentitiesOnly=no -o PreferredAuthentications=publickey -o PasswordAuthentication=no -o ConnectTimeout=30 -o GSSAPIAuthentication=no -o ServerAliveInterval=30 -o ServerAliveCountMax=10 -i /home/sut/runs/280b72753f6b/perfkitbenchmarker_keyfile -o ControlPath="/tmp/pkb/runs/be9fa42c6a9b/ssh/%h" -o ControlMaster=auto -o ControlPersist=30m -o TCPKeepAlive=yes ubuntu@[3.120.235.131]:/tmp/pkb/pkb-be9fa42c6a9b-1-docker_pt0-6b601438-sar.stdout /tmp/pkb/runs/be9fa42c6a9b}
ReturnCode:0
STDOUT: 
STDERR: 
2022-09-02 02:12:24,410 be9fa42c6a9b MainThread docker_pt(1/1) vm_util.py:363 INFO     Running: ssh -A -p 22 ubuntu@3.75.137.230 -2 -o UserKnownHostsFile=/dev/null -o StrictHostKeyChecking=no -o IdentitiesOnly=no -o PreferredAuthentications=publickey -o PasswordAuthentication=no -o ConnectTimeout=5 -o GSSAPIAuthentication=no -o ServerAliveInterval=30 -o ServerAliveCountMax=10 -i /home/sut/runs/280b72753f6b/perfkitbenchmarker_keyfile -o ControlPath="/tmp/pkb/runs/be9fa42c6a9b/ssh/%h" -o ControlMaster=auto -o ControlPersist=30m -o TCPKeepAlive=yes kubectl describe node --namespace=root-9b7faf1c1f60
2022-09-02 02:12:24,811 be9fa42c6a9b MainThread docker_pt(1/1) vm_util.py:424 INFO     Ran: {ssh -A -p 22 ubuntu@3.75.137.230 -2 -o UserKnownHostsFile=/dev/null -o StrictHostKeyChecking=no -o IdentitiesOnly=no -o PreferredAuthentications=publickey -o PasswordAuthentication=no -o ConnectTimeout=5 -o GSSAPIAuthentication=no -o ServerAliveInterval=30 -o ServerAliveCountMax=10 -i /home/sut/runs/280b72753f6b/perfkitbenchmarker_keyfile -o ControlPath="/tmp/pkb/runs/be9fa42c6a9b/ssh/%h" -o ControlMaster=auto -o ControlPersist=30m -o TCPKeepAlive=yes kubectl describe node --namespace=root-9b7faf1c1f60}
ReturnCode:0
STDOUT: Name:               ip-10-0-0-122
Roles:              <none>
Labels:             VM_GROUP_WORKER=yes
                    beta.kubernetes.io/arch=amd64
                    beta.kubernetes.io/os=linux
                    feature.node.kubernetes.io/cpu-cpuid.ADX=true
                    feature.node.kubernetes.io/cpu-cpuid.AESNI=true
                    feature.node.kubernetes.io/cpu-cpuid.AVX=true
                    feature.node.kubernetes.io/cpu-cpuid.AVX2=true
                    feature.node.kubernetes.io/cpu-cpuid.CLZERO=true
                    feature.node.kubernetes.io/cpu-cpuid.FMA3=true
                    feature.node.kubernetes.io/cpu-cpuid.HYPERVISOR=true
                    feature.node.kubernetes.io/cpu-cpuid.IBPB=true
                    feature.node.kubernetes.io/cpu-cpuid.MCOMMIT=true
                    feature.node.kubernetes.io/cpu-cpuid.RDPRU=true
                    feature.node.kubernetes.io/cpu-cpuid.SHA=true
                    feature.node.kubernetes.io/cpu-cpuid.SSE4A=true
                    feature.node.kubernetes.io/cpu-cpuid.STIBP=true
                    feature.node.kubernetes.io/cpu-cpuid.WBNOINVD=true
                    feature.node.kubernetes.io/cpu-hardware_multithreading=true
                    feature.node.kubernetes.io/kernel-config.NO_HZ=true
                    feature.node.kubernetes.io/kernel-config.NO_HZ_IDLE=true
                    feature.node.kubernetes.io/kernel-version.full=5.15.0-1019-aws
                    feature.node.kubernetes.io/kernel-version.major=5
                    feature.node.kubernetes.io/kernel-version.minor=15
                    feature.node.kubernetes.io/kernel-version.revision=0
                    feature.node.kubernetes.io/memory-numa=true
                    feature.node.kubernetes.io/pci-0300_1d0f.present=true
                    feature.node.kubernetes.io/storage-nonrotationaldisk=true
                    feature.node.kubernetes.io/system-os_release.ID=ubuntu
                    feature.node.kubernetes.io/system-os_release.VERSION_ID=22.04
                    feature.node.kubernetes.io/system-os_release.VERSION_ID.major=22
                    feature.node.kubernetes.io/system-os_release.VERSION_ID.minor=04
                    kubernetes.io/arch=amd64
                    kubernetes.io/hostname=ip-10-0-0-122
                    kubernetes.io/os=linux
Annotations:        flannel.alpha.coreos.com/backend-data: {"VNI":1,"VtepMAC":"ce:39:56:8d:06:7b"}
                    flannel.alpha.coreos.com/backend-type: vxlan
                    flannel.alpha.coreos.com/kube-subnet-manager: true
                    flannel.alpha.coreos.com/public-ip: 10.0.0.122
                    kubeadm.alpha.kubernetes.io/cri-socket: /var/run/dockershim.sock
                    nfd.node.kubernetes.io/extended-resources: 
                    nfd.node.kubernetes.io/feature-labels:
                      cpu-cpuid.ADX,cpu-cpuid.AESNI,cpu-cpuid.AVX,cpu-cpuid.AVX2,cpu-cpuid.CLZERO,cpu-cpuid.FMA3,cpu-cpuid.HYPERVISOR,cpu-cpuid.IBPB,cpu-cpuid.M...
                    nfd.node.kubernetes.io/worker.version: v0.10.1
                    node.alpha.kubernetes.io/ttl: 0
                    volumes.kubernetes.io/controller-managed-attach-detach: true
CreationTimestamp:  Fri, 02 Sep 2022 02:47:06 +0000
Taints:             <none>
Unschedulable:      false
Lease:
  HolderIdentity:  ip-10-0-0-122
  AcquireTime:     <unset>
  RenewTime:       Fri, 02 Sep 2022 09:12:24 +0000
Conditions:
  Type                 Status  LastHeartbeatTime                 LastTransitionTime                Reason                       Message
  ----                 ------  -----------------                 ------------------                ------                       -------
  NetworkUnavailable   False   Fri, 02 Sep 2022 02:47:21 +0000   Fri, 02 Sep 2022 02:47:21 +0000   FlannelIsUp                  Flannel is running on this node
  MemoryPressure       False   Fri, 02 Sep 2022 09:10:01 +0000   Fri, 02 Sep 2022 02:47:05 +0000   KubeletHasSufficientMemory   kubelet has sufficient memory available
  DiskPressure         False   Fri, 02 Sep 2022 09:10:01 +0000   Fri, 02 Sep 2022 02:47:05 +0000   KubeletHasNoDiskPressure     kubelet has no disk pressure
  PIDPressure          False   Fri, 02 Sep 2022 09:10:01 +0000   Fri, 02 Sep 2022 02:47:05 +0000   KubeletHasSufficientPID      kubelet has sufficient PID available
  Ready                True    Fri, 02 Sep 2022 09:10:01 +0000   Fri, 02 Sep 2022 02:47:26 +0000   KubeletReady                 kubelet is posting ready status. AppArmor enabled
Addresses:
  InternalIP:  10.0.0.122
  Hostname:    ip-10-0-0-122
Capacity:
  cpu:                64
  ephemeral-storage:  507930276Ki
  hugepages-1Gi:      0
  hugepages-2Mi:      0
  memory:             129209272Ki
  pods:               110
Allocatable:
  cpu:                64
  ephemeral-storage:  468108541587
  hugepages-1Gi:      0
  hugepages-2Mi:      0
  memory:             129106872Ki
  pods:               110
System Info:
  Machine ID:                 ec2a6229a64e3402459decde263cce38
  System UUID:                ec2a6229-a64e-3402-459d-ecde263cce38
  Boot ID:                    446a05fe-46bf-4557-a0d4-3424dad4dcad
  Kernel Version:             5.15.0-1019-aws
  OS Image:                   Ubuntu 22.04.1 LTS
  Operating System:           linux
  Architecture:               amd64
  Container Runtime Version:  docker://20.10.17
  Kubelet Version:            v1.21.14
  Kube-Proxy Version:         v1.21.14
PodCIDR:                      10.244.1.0/24
PodCIDRs:                     10.244.1.0/24
Non-terminated Pods:          (5 in total)
  Namespace                   Name                                          CPU Requests  CPU Limits  Memory Requests  Memory Limits  Age
  ---------                   ----                                          ------------  ----------  ---------------  -------------  ---
  kube-system                 coredns-558bd4d5db-qm5qt                      100m (0%)     0 (0%)      70Mi (0%)        170Mi (0%)     6h25m
  kube-system                 kube-flannel-ds-cdcqg                         100m (0%)     100m (0%)   50Mi (0%)        50Mi (0%)      6h25m
  kube-system                 kube-proxy-qtslr                              0 (0%)        0 (0%)      0 (0%)           0 (0%)         6h25m
  node-feature-discovery      nfd-worker-79wqp                              0 (0%)        0 (0%)      0 (0%)           0 (0%)         6h24m
  root-9b7faf1c1f60           dlrm-pytorch-epyc-facebook-benchmark-8gzzk    0 (0%)        0 (0%)      0 (0%)           0 (0%)         14s
Allocated resources:
  (Total limits may be over 100 percent, i.e., overcommitted.)
  Resource           Requests    Limits
  --------           --------    ------
  cpu                200m (0%)   100m (0%)
  memory             120Mi (0%)  220Mi (0%)
  ephemeral-storage  0 (0%)      0 (0%)
  hugepages-1Gi      0 (0%)      0 (0%)
  hugepages-2Mi      0 (0%)      0 (0%)
Events:              <none>


Name:               ip-10-0-0-54
Roles:              control-plane,master
Labels:             beta.kubernetes.io/arch=amd64
                    beta.kubernetes.io/os=linux
                    kubernetes.io/arch=amd64
                    kubernetes.io/hostname=ip-10-0-0-54
                    kubernetes.io/os=linux
                    node-role.kubernetes.io/control-plane=
                    node-role.kubernetes.io/master=
                    node.kubernetes.io/exclude-from-external-load-balancers=
Annotations:        flannel.alpha.coreos.com/backend-data: {"VNI":1,"VtepMAC":"96:86:99:58:be:c6"}
                    flannel.alpha.coreos.com/backend-type: vxlan
                    flannel.alpha.coreos.com/kube-subnet-manager: true
                    flannel.alpha.coreos.com/public-ip: 10.0.0.54
                    kubeadm.alpha.kubernetes.io/cri-socket: /var/run/dockershim.sock
                    nfd.node.kubernetes.io/master.version: v0.10.1
                    node.alpha.kubernetes.io/ttl: 0
                    volumes.kubernetes.io/controller-managed-attach-detach: true
CreationTimestamp:  Fri, 02 Sep 2022 02:46:41 +0000
Taints:             node-role.kubernetes.io/master:NoSchedule
Unschedulable:      false
Lease:
  HolderIdentity:  ip-10-0-0-54
  AcquireTime:     <unset>
  RenewTime:       Fri, 02 Sep 2022 09:12:26 +0000
Conditions:
  Type                 Status  LastHeartbeatTime                 LastTransitionTime                Reason                       Message
  ----                 ------  -----------------                 ------------------                ------                       -------
  NetworkUnavailable   False   Fri, 02 Sep 2022 02:47:21 +0000   Fri, 02 Sep 2022 02:47:21 +0000   FlannelIsUp                  Flannel is running on this node
  MemoryPressure       False   Fri, 02 Sep 2022 09:08:27 +0000   Fri, 02 Sep 2022 02:46:41 +0000   KubeletHasSufficientMemory   kubelet has sufficient memory available
  DiskPressure         False   Fri, 02 Sep 2022 09:08:27 +0000   Fri, 02 Sep 2022 02:46:41 +0000   KubeletHasNoDiskPressure     kubelet has no disk pressure
  PIDPressure          False   Fri, 02 Sep 2022 09:08:27 +0000   Fri, 02 Sep 2022 02:46:41 +0000   KubeletHasSufficientPID      kubelet has sufficient PID available
  Ready                True    Fri, 02 Sep 2022 09:08:27 +0000   Fri, 02 Sep 2022 02:47:24 +0000   KubeletReady                 kubelet is posting ready status. AppArmor enabled
Addresses:
  InternalIP:  10.0.0.54
  Hostname:    ip-10-0-0-54
Capacity:
  cpu:                16
  ephemeral-storage:  101430960Ki
  hugepages-1Gi:      0
  hugepages-2Mi:      0
  memory:             64459420Ki
  pods:               110
Allocatable:
  cpu:                16
  ephemeral-storage:  93478772582
  hugepages-1Gi:      0
  hugepages-2Mi:      0
  memory:             64357020Ki
  pods:               110
System Info:
  Machine ID:                 ec2f9765402c3ee2ce9f69c6af53d0b9
  System UUID:                ec2f9765-402c-3ee2-ce9f-69c6af53d0b9
  Boot ID:                    fabe6af5-835d-4934-8e53-1de6968e8d52
  Kernel Version:             5.15.0-1019-aws
  OS Image:                   Ubuntu 22.04.1 LTS
  Operating System:           linux
  Architecture:               amd64
  Container Runtime Version:  docker://20.10.17
  Kubelet Version:            v1.21.14
  Kube-Proxy Version:         v1.21.14
PodCIDR:                      10.244.0.0/24
PodCIDRs:                     10.244.0.0/24
Non-terminated Pods:          (8 in total)
  Namespace                   Name                                    CPU Requests  CPU Limits  Memory Requests  Memory Limits  Age
  ---------                   ----                                    ------------  ----------  ---------------  -------------  ---
  kube-system                 coredns-558bd4d5db-n5w9m                100m (0%)     0 (0%)      70Mi (0%)        170Mi (0%)     6h25m
  kube-system                 etcd-ip-10-0-0-54                       100m (0%)     0 (0%)      100Mi (0%)       0 (0%)         6h25m
  kube-system                 kube-apiserver-ip-10-0-0-54             250m (1%)     0 (0%)      0 (0%)           0 (0%)         6h25m
  kube-system                 kube-controller-manager-ip-10-0-0-54    200m (1%)     0 (0%)      0 (0%)           0 (0%)         6h25m
  kube-system                 kube-flannel-ds-mk7cp                   100m (0%)     100m (0%)   50Mi (0%)        50Mi (0%)      6h25m
  kube-system                 kube-proxy-v5gcb                        0 (0%)        0 (0%)      0 (0%)           0 (0%)         6h25m
  kube-system                 kube-scheduler-ip-10-0-0-54             100m (0%)     0 (0%)      0 (0%)           0 (0%)         6h25m
  node-feature-discovery      nfd-master-75b7c4d897-fs2js             0 (0%)        0 (0%)      0 (0%)           0 (0%)         6h24m
Allocated resources:
  (Total limits may be over 100 percent, i.e., overcommitted.)
  Resource           Requests    Limits
  --------           --------    ------
  cpu                850m (5%)   100m (0%)
  memory             220Mi (0%)  220Mi (0%)
  ephemeral-storage  0 (0%)      0 (0%)
  hugepages-1Gi      0 (0%)      0 (0%)
  hugepages-2Mi      0 (0%)      0 (0%)
Events:              <none>

STDERR: 
2022-09-02 02:12:24,811 be9fa42c6a9b MainThread docker_pt(1/1) vm_util.py:363 INFO     Running: ssh -A -p 22 ubuntu@3.75.137.230 -2 -o UserKnownHostsFile=/dev/null -o StrictHostKeyChecking=no -o IdentitiesOnly=no -o PreferredAuthentications=publickey -o PasswordAuthentication=no -o ConnectTimeout=5 -o GSSAPIAuthentication=no -o ServerAliveInterval=30 -o ServerAliveCountMax=10 -i /home/sut/runs/280b72753f6b/perfkitbenchmarker_keyfile -o ControlPath="/tmp/pkb/runs/be9fa42c6a9b/ssh/%h" -o ControlMaster=auto -o ControlPersist=30m -o TCPKeepAlive=yes kubectl describe pod --namespace=root-9b7faf1c1f60
2022-09-02 02:12:25,195 be9fa42c6a9b MainThread docker_pt(1/1) vm_util.py:424 INFO     Ran: {ssh -A -p 22 ubuntu@3.75.137.230 -2 -o UserKnownHostsFile=/dev/null -o StrictHostKeyChecking=no -o IdentitiesOnly=no -o PreferredAuthentications=publickey -o PasswordAuthentication=no -o ConnectTimeout=5 -o GSSAPIAuthentication=no -o ServerAliveInterval=30 -o ServerAliveCountMax=10 -i /home/sut/runs/280b72753f6b/perfkitbenchmarker_keyfile -o ControlPath="/tmp/pkb/runs/be9fa42c6a9b/ssh/%h" -o ControlMaster=auto -o ControlPersist=30m -o TCPKeepAlive=yes kubectl describe pod --namespace=root-9b7faf1c1f60}
ReturnCode:0
STDOUT: Name:         dlrm-pytorch-epyc-facebook-benchmark-8gzzk
Namespace:    root-9b7faf1c1f60
Priority:     0
Node:         ip-10-0-0-122/10.0.0.122
Start Time:   Fri, 02 Sep 2022 09:12:12 +0000
Labels:       controller-uid=54eec2ec-e5a0-4c27-a639-ea10f098f1ca
              job-name=dlrm-pytorch-epyc-facebook-benchmark
Annotations:  <none>
Status:       Running
IP:           10.0.0.122
IPs:
  IP:           10.0.0.122
Controlled By:  Job/dlrm-pytorch-epyc-facebook-benchmark
Containers:
  dlrm-pytorch-epyc-facebook-benchmark:
    Container ID:   docker://d49a0677fc24e8426684b54f27e2991a2118ec75faec46e132287d68dc6ef509
    Image:          dlrm-pytorch-epyc-facebook-dummy:latest
    Image ID:       docker://sha256:c1fbd6c9967b3f4d9ddf2a5c90b2327f668a740235915d17d96adb1d91c27591
    Port:           <none>
    Host Port:      <none>
    State:          Running
      Started:      Fri, 02 Sep 2022 09:12:13 +0000
    Ready:          True
    Restart Count:  0
    Environment:
      BATCH_SIZE:    4
      MODE:          throughput
      PRECISION:     fp32
      CPI:           16
      STEPS:         100
      DATA_TYPE:     dummy
      HT:            TRUE
      ROME:          ROME
      TOPOLOGY:      DLRM
      BENCH_SOURCE:  facebook
      SWI:           1
    Mounts:
      /var/run/secrets/kubernetes.io/serviceaccount from kube-api-access-x9zbr (ro)
Conditions:
  Type              Status
  Initialized       True 
  Ready             True 
  ContainersReady   True 
  PodScheduled      True 
Volumes:
  kube-api-access-x9zbr:
    Type:                    Projected (a volume that contains injected data from multiple sources)
    TokenExpirationSeconds:  3607
    ConfigMapName:           kube-root-ca.crt
    ConfigMapOptional:       <nil>
    DownwardAPI:             true
QoS Class:                   BestEffort
Node-Selectors:              <none>
Tolerations:                 node.kubernetes.io/not-ready:NoExecute op=Exists for 300s
                             node.kubernetes.io/unreachable:NoExecute op=Exists for 300s
Events:
  Type    Reason     Age   From               Message
  ----    ------     ----  ----               -------
  Normal  Scheduled  15s   default-scheduler  Successfully assigned root-9b7faf1c1f60/dlrm-pytorch-epyc-facebook-benchmark-8gzzk to ip-10-0-0-122
  Normal  Pulled     15s   kubelet            Container image "dlrm-pytorch-epyc-facebook-dummy:latest" already present on machine
  Normal  Created    15s   kubelet            Created container dlrm-pytorch-epyc-facebook-benchmark
  Normal  Started    14s   kubelet            Started container dlrm-pytorch-epyc-facebook-benchmark

STDERR: 
2022-09-02 02:12:25,195 be9fa42c6a9b MainThread docker_pt(1/1) vm_util.py:363 INFO     Running: ssh -A -p 22 ubuntu@3.75.137.230 -2 -o UserKnownHostsFile=/dev/null -o StrictHostKeyChecking=no -o IdentitiesOnly=no -o PreferredAuthentications=publickey -o PasswordAuthentication=no -o ConnectTimeout=5 -o GSSAPIAuthentication=no -o ServerAliveInterval=30 -o ServerAliveCountMax=10 -i /home/sut/runs/280b72753f6b/perfkitbenchmarker_keyfile -o ControlPath="/tmp/pkb/runs/be9fa42c6a9b/ssh/%h" -o ControlMaster=auto -o ControlPersist=30m -o TCPKeepAlive=yes bash -c 'for p in $(kubectl get pod -n root-9b7faf1c1f60 --no-headers -o custom-columns=:metadata.name);do echo "pod $p:";kubectl -n root-9b7faf1c1f60 logs --all-containers=true $p;done'
2022-09-02 02:12:25,692 be9fa42c6a9b MainThread docker_pt(1/1) vm_util.py:424 INFO     Ran: {ssh -A -p 22 ubuntu@3.75.137.230 -2 -o UserKnownHostsFile=/dev/null -o StrictHostKeyChecking=no -o IdentitiesOnly=no -o PreferredAuthentications=publickey -o PasswordAuthentication=no -o ConnectTimeout=5 -o GSSAPIAuthentication=no -o ServerAliveInterval=30 -o ServerAliveCountMax=10 -i /home/sut/runs/280b72753f6b/perfkitbenchmarker_keyfile -o ControlPath="/tmp/pkb/runs/be9fa42c6a9b/ssh/%h" -o ControlMaster=auto -o ControlPersist=30m -o TCPKeepAlive=yes bash -c 'for p in $(kubectl get pod -n root-9b7faf1c1f60 --no-headers -o custom-columns=:metadata.name);do echo "pod $p:";kubectl -n root-9b7faf1c1f60 logs --all-containers=true $p;done'}
ReturnCode:0
STDOUT: pod dlrm-pytorch-epyc-facebook-benchmark-8gzzk:
TOPOLOGY: DLRM
BENCH_SOURCE: facebook
MODE: throughput
PRECISION: fp32
DATA_TYPE: dummy
PLATFORM: 
BATCH_SIZE: 4
CPI: 16
STEPS: 100
HT: TRUE
SWI: 1
Setup ZenDNN env
Checking mandatory prerequisites
make is installed
GNU Make 4.2.1
gcc is installed
gcc (Ubuntu 9.4.0-1ubuntu1~20.04.1) 9.4.0
g++ is installed
g++ (Ubuntu 9.4.0-1ubuntu1~20.04.1) 9.4.0
ld is installed
GNU ld (GNU Binutils for Ubuntu) 2.34
python3 is installed
Python 3.8.13
Checking optional prerequisites
lscpu is installed
lscpu from util-linux 2.34
lstopo-no-graphics is installed
lstopo-no-graphics 2.1.0
uname is installed
uname (GNU coreutils) 8.30 Copyright (C) 2018 Free Software Foundation, Inc. License GPLv3+: GNU GPL version 3 or later <https://gnu.org/licenses/gpl.html>. This is free software: you are free to change and redistribute it. There is NO WARRANTY, to the extent permitted by law. Written by David MacKenzie.
dmidecode is installed
3.2

ZENDNN_LOG_OPTS=ALL:0
OMP_NUM_THREADS=64
OMP_WAIT_POLICY=ACTIVE
OMP_PROC_BIND=FALSE
ZENDNN_TF_VERSION=1.15
ZENDNN_PT_VERSION=1.9.0
OMP_DYNAMIC=FALSE
ZENDNN_INFERENCE_ONLY=1
ZENDNN_MEMPOOL_ENABLE=1
ZENDNN_TENSOR_POOL_LIMIT=16
ZENDNN_TENSOR_BUF_MAXSIZE_ENABLE=0
ZENDNN_BLOCKED_FORMAT=0
ZENDNN_NHWC_BLOCKED=0
ZENDNN_INT8_SUPPORT=0
ZENDNN_RELU_UPPERBOUND=0
ZENDNN_GEMM_ALGO=0
ZENDNN_TF_CONV_ADD_FUSION_SAFE=0
TF_ZEN_PRIMITIVE_REUSE_DISABLE=FALSE
ZENDNN_GIT_ROOT: /home/workspace/PT_v1.9.0_ZenDNN_v3.2_Python_v3.8/ZenDNN
/home/workspace/PT_v1.9.0_ZenDNN_v3.2_Python_v3.8/ZenDNN
Directory ZenDNN_utils DOES NOT exists!
ZENDNN_UTILS_GIT_ROOT: /home/workspace/PT_v1.9.0_ZenDNN_v3.2_Python_v3.8/ZenDNN_utils
/home/workspace/PT_v1.9.0_ZenDNN_v3.2_Python_v3.8/ZenDNN
ZENDNN_PARENT_FOLDER: /home/workspace/PT_v1.9.0_ZenDNN_v3.2_Python_v3.8
ZENDNN_AOCC_COMP_PATH: /home/workspace/aocc-compiler-3.0.0
ZENDNN_BLIS_PATH: /home/workspace/amd-blis
TF_GIT_ROOT: /home/workspace/PT_v1.9.0_ZenDNN_v3.2_Python_v3.8/tensorflow
BENCHMARKS_GIT_ROOT: /home/workspace/PT_v1.9.0_ZenDNN_v3.2_Python_v3.8/benchmarks
PYTORCH_GIT_ROOT: /home/workspace/PT_v1.9.0_ZenDNN_v3.2_Python_v3.8/pytorch
PYTORCH_BENCHMARK_GIT_ROOT: /home/workspace/PT_v1.9.0_ZenDNN_v3.2_Python_v3.8/pytorch-benchmarks
ONNXRUNTIME_GIT_ROOT: /home/workspace/PT_v1.9.0_ZenDNN_v3.2_Python_v3.8/onnxruntime
ZENDNN_ONNXRT_VERSION: 1.8.0
ZENDNN_ONNX_VERSION: 1.9.0
ZENDNN_PRIMITIVE_CACHE_CAPACITY: 1024
ZENDNN_PRIMITIVE_LOG_ENABLE: 0
ZENDNN_TEST_USE_COMMON_BENCHMARK_LOC: FALSE
ZENDNN_TEST_COMMON_BENCHMARK_LOC: /home/amd/benchmark_data
LD_LIBRARY_PATH: /home/workspace/PT_v1.9.0_ZenDNN_v3.2_Python_v3.8/ZenDNN/_out/lib/:/home/workspace/PT_v1.9.0_ZenDNN_v3.2_Python_v3.8/ZenDNN/external/googletest/lib:/home/workspace/amd-blis/lib/:/home/workspace/aocc-compiler-3.0.0/lib:/home/workspace/aocc-compiler-3.0.0/lib32:
scripts/gather_hw_os_kernel_bios_info.sh
cat: /proc/sys/kernel/numa_balancing_scan_delay_ms: No such file or directory
cat: /proc/sys/kernel/numa_balancing_scan_size_mb: No such file or directory
cat: /proc/sys/kernel/numa_balancing_scan_period_min_ms: No such file or directory
cat: /proc/sys/kernel/sched_tunable_scaling: No such file or directory
cat: /proc/sys/kernel/sched_min_granularity_ns: No such file or directory
cat: /proc/sys/kernel/sched_wakeup_granularity_ns: No such file or directory
cat: /proc/sys/kernel/sched_migration_cost_ns: No such file or directory
cat: /proc/sys/kernel/sched_nr_migrate: No such file or directory
cat: /proc/sys/kernel/sched_latency_ns: No such file or directory


Please set below environment variables explicitly as per the platform you are using!!
	OMP_NUM_THREADS, GOMP_CPU_AFFINITY


Run DLRM inference benchmark
OMP: Warning #181: OMP_PROC_BIND: ignored because GOMP_CPU_AFFINITY has been defined
OMP: Warning #181: OMP_PROC_BIND: ignored because GOMP_CPU_AFFINITY has been defined
:::MLLOG {"namespace": "", "time_ms": 1662109934751, "event_type": "POINT_IN_TIME", "key": "cache_clear", "value": true, "metadata": {"file": "dlrm_s_pytorch.py", "lineno": 1075}}
:::MLLOG {"namespace": "", "time_ms": 1662109934819, "event_type": "INTERVAL_START", "key": "init_start", "value": null, "metadata": {"file": "dlrm_s_pytorch.py", "lineno": 1076}}
:::MLLOG {"namespace": "", "time_ms": 1662109934751, "event_type": "POINT_IN_TIME", "key": "cache_clear", "value": true, "metadata": {"file": "dlrm_s_pytorch.py", "lineno": 1075}}
:::MLLOG {"namespace": "", "time_ms": 1662109934819, "event_type": "INTERVAL_START", "key": "init_start", "value": null, "metadata": {"file": "dlrm_s_pytorch.py", "lineno": 1076}}
world size: 1, current rank: 0, local rank: 0
Using CPU...
:::MLLOG {"namespace": "", "time_ms": 1662109934820, "event_type": "INTERVAL_END", "key": "init_stop", "value": null, "metadata": {"file": "dlrm_s_pytorch.py", "lineno": 1137}}
:::MLLOG {"namespace": "", "time_ms": 1662109934820, "event_type": "INTERVAL_START", "key": "run_start", "value": null, "metadata": {"file": "dlrm_s_pytorch.py", "lineno": 1139}}
world size: 1, current rank: 0, local rank: 0
Using CPU...
:::MLLOG {"namespace": "", "time_ms": 1662109934820, "event_type": "INTERVAL_END", "key": "init_stop", "value": null, "metadata": {"file": "dlrm_s_pytorch.py", "lineno": 1137}}
:::MLLOG {"namespace": "", "time_ms": 1662109934820, "event_type": "INTERVAL_START", "key": "run_start", "value": null, "metadata": {"file": "dlrm_s_pytorch.py", "lineno": 1139}}
command line args:  {"arch_sparse_feature_size": 64, "arch_embedding_size": "1000000-1000000-1000000-1000000-1000000-1000000-1000000-1000000", "arch_mlp_bot": "512-512-64", "arch_mlp_top": "1024-1024-1024-1", "arch_interaction_op": "dot", "arch_interaction_itself": false, "weighted_pooling": null, "md_flag": false, "md_threshold": 200, "md_temperature": 0.3, "md_round_dims": false, "qr_flag": false, "qr_threshold": 200, "qr_operation": "mult", "qr_collisions": 4, "activation_function": "relu", "loss_function": "mse", "loss_weights": "1.0-1.0", "loss_threshold": 0.0, "round_targets": false, "data_size": 1, "num_batches": 100, "data_generation": "random", "rand_data_dist": "uniform", "rand_data_min": 0, "rand_data_max": 1, "rand_data_mu": -1, "rand_data_sigma": 1, "data_trace_file": "./input/dist_emb_j.log", "data_set": "kaggle", "raw_data_file": "", "processed_data_file": "", "data_randomize": "total", "data_trace_enable_padding": false, "max_ind_range": -1, "data_sub_sample_rate": 0.0, "num_indices_per_lookup": 100, "num_indices_per_lookup_fixed": false, "num_workers": 0, "memory_map": true, "mini_batch_size": 4, "nepochs": 1, "learning_rate": 0.01, "print_precision": 5, "numpy_rand_seed": 727, "sync_dense_params": true, "optimizer": "sgd", "dataset_multiprocessing": false, "inference_only": true, "quantize_mlp_with_bit": 32, "quantize_emb_with_bit": 32, "save_onnx": false, "use_gpu": false, "local_rank": -1, "dist_backend": "", "print_freq": 10, "test_freq": -1, "test_mini_batch_size": 4, "test_num_workers": 0, "print_time": true, "print_wall_time": false, "debug_mode": false, "enable_profiling": false, "plot_compute_graph": false, "tensor_board_filename": "run_kaggle_pt", "save_model": "", "load_model": "", "mlperf_logging": true, "num_cpu_cores": 0, "mlperf_acc_threshold": 0.0, "mlperf_auc_threshold": 0.0, "mlperf_bin_loader": false, "mlperf_bin_shuffle": false, "mlperf_grad_accum_iter": 1, "lr_num_warmup_steps": 0, "lr_decay_start_step": 0, "lr_num_decay_steps": 0, "share_weight_instance": 1, "ln_emb": [1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000]}
:::MLLOG {"namespace": "", "time_ms": 1662109943464, "event_type": "POINT_IN_TIME", "key": "submission_benchmark", "value": "dlrm", "metadata": {"file": "/home/workspace/dlrm/mlperf_logger.py", "lineno": 87}}
:::MLLOG {"namespace": "", "time_ms": 1662109943465, "event_type": "POINT_IN_TIME", "key": "submission_org", "value": "reference_implementation", "metadata": {"file": "/home/workspace/dlrm/mlperf_logger.py", "lineno": 92}}
:::MLLOG {"namespace": "", "time_ms": 1662109943465, "event_type": "POINT_IN_TIME", "key": "submission_division", "value": "closed", "metadata": {"file": "/home/workspace/dlrm/mlperf_logger.py", "lineno": 96}}
:::MLLOG {"namespace": "", "time_ms": 1662109943465, "event_type": "POINT_IN_TIME", "key": "submission_status", "value": "onprem", "metadata": {"file": "/home/workspace/dlrm/mlperf_logger.py", "lineno": 100}}
:::MLLOG {"namespace": "", "time_ms": 1662109943465, "event_type": "POINT_IN_TIME", "key": "submission_platform", "value": "reference_implementation", "metadata": {"file": "/home/workspace/dlrm/mlperf_logger.py", "lineno": 104}}
:::MLLOG {"namespace": "", "time_ms": 1662109943465, "event_type": "POINT_IN_TIME", "key": "submission_entry", "value": "reference_implementation", "metadata": {"file": "/home/workspace/dlrm/mlperf_logger.py", "lineno": 108}}
:::MLLOG {"namespace": "", "time_ms": 1662109943465, "event_type": "POINT_IN_TIME", "key": "submission_poc_name", "value": "reference_implementation", "metadata": {"file": "/home/workspace/dlrm/mlperf_logger.py", "lineno": 112}}
:::MLLOG {"namespace": "", "time_ms": 1662109943465, "event_type": "POINT_IN_TIME", "key": "submission_poc_email", "value": "reference_implementation", "metadata": {"file": "/home/workspace/dlrm/mlperf_logger.py", "lineno": 116}}
:::MLLOG {"namespace": "", "time_ms": 1662109943465, "event_type": "POINT_IN_TIME", "key": "seed", "value": 727, "metadata": {"file": "dlrm_s_pytorch.py", "lineno": 1419}}
:::MLLOG {"namespace": "", "time_ms": 1662109943466, "event_type": "POINT_IN_TIME", "key": "global_batch_size", "value": 4, "metadata": {"file": "dlrm_s_pytorch.py", "lineno": 1422}}
time/loss/accuracy (if enabled):
:::MLLOG {"namespace": "", "time_ms": 1662109943466, "event_type": "POINT_IN_TIME", "key": "opt_base_learning_rate", "value": 0.01, "metadata": {"file": "dlrm_s_pytorch.py", "lineno": 1517}}
:::MLLOG {"namespace": "", "time_ms": 1662109943466, "event_type": "POINT_IN_TIME", "key": "opt_learning_rate_warmup_steps", "value": 0, "metadata": {"file": "dlrm_s_pytorch.py", "lineno": 1520}}
:::MLLOG {"namespace": "", "time_ms": 1662109943466, "event_type": "POINT_IN_TIME", "key": "sgd_opt_base_learning_rate", "value": 0.01, "metadata": {"file": "dlrm_s_pytorch.py", "lineno": 1526}}
:::MLLOG {"namespace": "", "time_ms": 1662109943466, "event_type": "POINT_IN_TIME", "key": "lr_decay_start_steps", "value": 0, "metadata": {"file": "dlrm_s_pytorch.py", "lineno": 1529}}
:::MLLOG {"namespace": "", "time_ms": 1662109943466, "event_type": "POINT_IN_TIME", "key": "sgd_opt_learning_rate_decay_steps", "value": 0, "metadata": {"file": "dlrm_s_pytorch.py", "lineno": 1532}}
:::MLLOG {"namespace": "", "time_ms": 1662109943466, "event_type": "POINT_IN_TIME", "key": "sgd_opt_learning_rate_decay_poly_power", "value": 2, "metadata": {"file": "dlrm_s_pytorch.py", "lineno": 1535}}
command line args:  {"arch_sparse_feature_size": 64, "arch_embedding_size": "1000000-1000000-1000000-1000000-1000000-1000000-1000000-1000000", "arch_mlp_bot": "512-512-64", "arch_mlp_top": "1024-1024-1024-1", "arch_interaction_op": "dot", "arch_interaction_itself": false, "weighted_pooling": null, "md_flag": false, "md_threshold": 200, "md_temperature": 0.3, "md_round_dims": false, "qr_flag": false, "qr_threshold": 200, "qr_operation": "mult", "qr_collisions": 4, "activation_function": "relu", "loss_function": "mse", "loss_weights": "1.0-1.0", "loss_threshold": 0.0, "round_targets": false, "data_size": 1, "num_batches": 100, "data_generation": "random", "rand_data_dist": "uniform", "rand_data_min": 0, "rand_data_max": 1, "rand_data_mu": -1, "rand_data_sigma": 1, "data_trace_file": "./input/dist_emb_j.log", "data_set": "kaggle", "raw_data_file": "", "processed_data_file": "", "data_randomize": "total", "data_trace_enable_padding": false, "max_ind_range": -1, "data_sub_sample_rate": 0.0, "num_indices_per_lookup": 100, "num_indices_per_lookup_fixed": false, "num_workers": 0, "memory_map": true, "mini_batch_size": 4, "nepochs": 1, "learning_rate": 0.01, "print_precision": 5, "numpy_rand_seed": 727, "sync_dense_params": true, "optimizer": "sgd", "dataset_multiprocessing": false, "inference_only": true, "quantize_mlp_with_bit": 32, "quantize_emb_with_bit": 32, "save_onnx": false, "use_gpu": false, "local_rank": -1, "dist_backend": "", "print_freq": 10, "test_freq": -1, "test_mini_batch_size": 4, "test_num_workers": 0, "print_time": true, "print_wall_time": false, "debug_mode": false, "enable_profiling": false, "plot_compute_graph": false, "tensor_board_filename": "run_kaggle_pt", "save_model": "", "load_model": "", "mlperf_logging": true, "num_cpu_cores": 0, "mlperf_acc_threshold": 0.0, "mlperf_auc_threshold": 0.0, "mlperf_bin_loader": false, "mlperf_bin_shuffle": false, "mlperf_grad_accum_iter": 1, "lr_num_warmup_steps": 0, "lr_decay_start_step": 0, "lr_num_decay_steps": 0, "share_weight_instance": 1, "ln_emb": [1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000]}
:::MLLOG {"namespace": "", "time_ms": 1662109943467, "event_type": "POINT_IN_TIME", "key": "submission_benchmark", "value": "dlrm", "metadata": {"file": "/home/workspace/dlrm/mlperf_logger.py", "lineno": 87}}
:::MLLOG {"namespace": "", "time_ms": 1662109943467, "event_type": "POINT_IN_TIME", "key": "submission_org", "value": "reference_implementation", "metadata": {"file": "/home/workspace/dlrm/mlperf_logger.py", "lineno": 92}}
:::MLLOG {"namespace": "", "time_ms": 1662109943467, "event_type": "POINT_IN_TIME", "key": "submission_division", "value": "closed", "metadata": {"file": "/home/workspace/dlrm/mlperf_logger.py", "lineno": 96}}
:::MLLOG {"namespace": "", "time_ms": 1662109943468, "event_type": "POINT_IN_TIME", "key": "submission_status", "value": "onprem", "metadata": {"file": "/home/workspace/dlrm/mlperf_logger.py", "lineno": 100}}
:::MLLOG {"namespace": "", "time_ms": 1662109943468, "event_type": "POINT_IN_TIME", "key": "submission_platform", "value": "reference_implementation", "metadata": {"file": "/home/workspace/dlrm/mlperf_logger.py", "lineno": 104}}
:::MLLOG {"namespace": "", "time_ms": 1662109943468, "event_type": "POINT_IN_TIME", "key": "submission_entry", "value": "reference_implementation", "metadata": {"file": "/home/workspace/dlrm/mlperf_logger.py", "lineno": 108}}
:::MLLOG {"namespace": "", "time_ms": 1662109943468, "event_type": "POINT_IN_TIME", "key": "submission_poc_name", "value": "reference_implementation", "metadata": {"file": "/home/workspace/dlrm/mlperf_logger.py", "lineno": 112}}
:::MLLOG {"namespace": "", "time_ms": 1662109943469, "event_type": "POINT_IN_TIME", "key": "submission_poc_email", "value": "reference_implementation", "metadata": {"file": "/home/workspace/dlrm/mlperf_logger.py", "lineno": 116}}
:::MLLOG {"namespace": "", "time_ms": 1662109943469, "event_type": "POINT_IN_TIME", "key": "seed", "value": 727, "metadata": {"file": "dlrm_s_pytorch.py", "lineno": 1419}}
:::MLLOG {"namespace": "", "time_ms": 1662109943469, "event_type": "POINT_IN_TIME", "key": "global_batch_size", "value": 4, "metadata": {"file": "dlrm_s_pytorch.py", "lineno": 1422}}
time/loss/accuracy (if enabled):
:::MLLOG {"namespace": "", "time_ms": 1662109943469, "event_type": "POINT_IN_TIME", "key": "opt_base_learning_rate", "value": 0.01, "metadata": {"file": "dlrm_s_pytorch.py", "lineno": 1517}}
:::MLLOG {"namespace": "", "time_ms": 1662109943469, "event_type": "POINT_IN_TIME", "key": "opt_learning_rate_warmup_steps", "value": 0, "metadata": {"file": "dlrm_s_pytorch.py", "lineno": 1520}}
:::MLLOG {"namespace": "", "time_ms": 1662109943470, "event_type": "POINT_IN_TIME", "key": "sgd_opt_base_learning_rate", "value": 0.01, "metadata": {"file": "dlrm_s_pytorch.py", "lineno": 1526}}
:::MLLOG {"namespace": "", "time_ms": 1662109943470, "event_type": "POINT_IN_TIME", "key": "lr_decay_start_steps", "value": 0, "metadata": {"file": "dlrm_s_pytorch.py", "lineno": 1529}}
:::MLLOG {"namespace": "", "time_ms": 1662109943470, "event_type": "POINT_IN_TIME", "key": "sgd_opt_learning_rate_decay_steps", "value": 0, "metadata": {"file": "dlrm_s_pytorch.py", "lineno": 1532}}
:::MLLOG {"namespace": "", "time_ms": 1662109943470, "event_type": "POINT_IN_TIME", "key": "sgd_opt_learning_rate_decay_poly_power", "value": 2, "metadata": {"file": "dlrm_s_pytorch.py", "lineno": 1535}}
dlrm_s_pytorch.py:493: TracerWarning: torch.tensor results are registered as constants in the trace. You can safely ignore this warning if you use this function to create tensors out of constant variables that would be the same every time you call this function. In any other case, this might cause the trace to be incorrect.
  li = torch.tensor([i for i in range(ni) for j in range(i + offset)])
dlrm_s_pytorch.py:494: TracerWarning: torch.tensor results are registered as constants in the trace. You can safely ignore this warning if you use this function to create tensors out of constant variables that would be the same every time you call this function. In any other case, this might cause the trace to be incorrect.
  lj = torch.tensor([j for i in range(nj) for j in range(i + offset)])
Testing for inference only
Average latency per example: 1.158ms
Total number of iterations: 100
Total number of iterations per second (across all threads): 863.43
Total time: 115.818ms
Throughput: 3453.706 fps
yes
dlrm_s_pytorch.py:493: TracerWarning: torch.tensor results are registered as constants in the trace. You can safely ignore this warning if you use this function to create tensors out of constant variables that would be the same every time you call this function. In any other case, this might cause the trace to be incorrect.
  li = torch.tensor([i for i in range(ni) for j in range(i + offset)])
dlrm_s_pytorch.py:494: TracerWarning: torch.tensor results are registered as constants in the trace. You can safely ignore this warning if you use this function to create tensors out of constant variables that would be the same every time you call this function. In any other case, this might cause the trace to be incorrect.
  lj = torch.tensor([j for i in range(nj) for j in range(i + offset)])
Testing for inference only
Average latency per example: 1.050ms
Total number of iterations: 100
Total number of iterations per second (across all threads): 952.68
Total time: 104.967ms
Throughput: 3810.706 fps
yes
Current test modes is: throughput
Current test max_batchsize is: 4
Current test precision is: fp32
SNCen mode: True
mode: throughput
data type: dummy
cpi: 16
Total instance: 2
Platform info: total_sockets:1 cores_per_socket:32 threads_per_core:2
The running command is: export OMP_NUM_THREADS=32 && export GOMP_CPU_AFFINITY=0-15,32-47 &&  numactl --physcpubind=0-15,32-47 -m 0 python dlrm_s_pytorch.py                 --mini-batch-size=4                 --num-batches=100                 --data-generation=random                 --arch-mlp-bot=512-512-64                 --arch-mlp-top=1024-1024-1024-1                 --arch-sparse-feature-size=64                 --arch-embedding-size=1000000-1000000-1000000-1000000-1000000-1000000-1000000-1000000                 --num-indices-per-lookup=100                 --arch-interaction-op=dot                 --numpy-rand-seed=727                 --memory-map                 --mlperf-logging                 --print-freq=10 --print-time --inference-only --share-weight-instance=1 & export OMP_NUM_THREADS=32 && export GOMP_CPU_AFFINITY=16-31,48-63 &&  numactl --physcpubind=16-31,48-63 -m 1 python dlrm_s_pytorch.py                 --mini-batch-size=4                 --num-batches=100                 --data-generation=random                 --arch-mlp-bot=512-512-64                 --arch-mlp-top=1024-1024-1024-1                 --arch-sparse-feature-size=64                 --arch-embedding-size=1000000-1000000-1000000-1000000-1000000-1000000-1000000-1000000                 --num-indices-per-lookup=100                 --arch-interaction-op=dot                 --numpy-rand-seed=727                 --memory-map                 --mlperf-logging                 --print-freq=10 --print-time --inference-only --share-weight-instance=1
Benchamrk begin
Benchamrk end
The test_take_time is 10 second

STDERR: 
2022-09-02 02:12:25,692 be9fa42c6a9b MainThread docker_pt(1/1) vm_util.py:363 INFO     Running: ssh -A -p 22 ubuntu@3.75.137.230 -2 -o UserKnownHostsFile=/dev/null -o StrictHostKeyChecking=no -o IdentitiesOnly=no -o PreferredAuthentications=publickey -o PasswordAuthentication=no -o ConnectTimeout=5 -o GSSAPIAuthentication=no -o ServerAliveInterval=30 -o ServerAliveCountMax=10 -i /home/sut/runs/280b72753f6b/perfkitbenchmarker_keyfile -o ControlPath="/tmp/pkb/runs/be9fa42c6a9b/ssh/%h" -o ControlMaster=auto -o ControlPersist=30m -o TCPKeepAlive=yes kubectl delete --namespace=root-9b7faf1c1f60 -f /opt/pkb/root-9b7faf1c1f60/kubernetes_config.yaml --ignore-not-found=true
2022-09-02 02:12:26,070 be9fa42c6a9b MainThread docker_pt(1/1) vm_util.py:426 DEBUG    Ran: {ssh -A -p 22 ubuntu@3.75.137.230 -2 -o UserKnownHostsFile=/dev/null -o StrictHostKeyChecking=no -o IdentitiesOnly=no -o PreferredAuthentications=publickey -o PasswordAuthentication=no -o ConnectTimeout=5 -o GSSAPIAuthentication=no -o ServerAliveInterval=30 -o ServerAliveCountMax=10 -i /home/sut/runs/280b72753f6b/perfkitbenchmarker_keyfile -o ControlPath="/tmp/pkb/runs/be9fa42c6a9b/ssh/%h" -o ControlMaster=auto -o ControlPersist=30m -o TCPKeepAlive=yes kubectl delete --namespace=root-9b7faf1c1f60 -f /opt/pkb/root-9b7faf1c1f60/kubernetes_config.yaml --ignore-not-found=true}
ReturnCode:0
STDOUT: job.batch "dlrm-pytorch-epyc-facebook-benchmark" deleted

STDERR: 
2022-09-02 02:12:26,071 be9fa42c6a9b MainThread docker_pt(1/1) vm_util.py:363 INFO     Running: ssh -A -p 22 ubuntu@3.75.137.230 -2 -o UserKnownHostsFile=/dev/null -o StrictHostKeyChecking=no -o IdentitiesOnly=no -o PreferredAuthentications=publickey -o PasswordAuthentication=no -o ConnectTimeout=5 -o GSSAPIAuthentication=no -o ServerAliveInterval=30 -o ServerAliveCountMax=10 -i /home/sut/runs/280b72753f6b/perfkitbenchmarker_keyfile -o ControlPath="/tmp/pkb/runs/be9fa42c6a9b/ssh/%h" -o ControlMaster=auto -o ControlPersist=30m -o TCPKeepAlive=yes kubectl delete namespace root-9b7faf1c1f60 --timeout=0 --wait --ignore-not-found=true
2022-09-02 02:13:08,710 be9fa42c6a9b MainThread docker_pt(1/1) vm_util.py:426 DEBUG    Ran: {ssh -A -p 22 ubuntu@3.75.137.230 -2 -o UserKnownHostsFile=/dev/null -o StrictHostKeyChecking=no -o IdentitiesOnly=no -o PreferredAuthentications=publickey -o PasswordAuthentication=no -o ConnectTimeout=5 -o GSSAPIAuthentication=no -o ServerAliveInterval=30 -o ServerAliveCountMax=10 -i /home/sut/runs/280b72753f6b/perfkitbenchmarker_keyfile -o ControlPath="/tmp/pkb/runs/be9fa42c6a9b/ssh/%h" -o ControlMaster=auto -o ControlPersist=30m -o TCPKeepAlive=yes kubectl delete namespace root-9b7faf1c1f60 --timeout=0 --wait --ignore-not-found=true}
ReturnCode:0
STDOUT: namespace "root-9b7faf1c1f60" deleted

STDERR: 
2022-09-02 02:13:08,710 be9fa42c6a9b MainThread docker_pt(1/1) vm_util.py:363 INFO     Running: mkdir -p /home/itr-1/dlrm-pytorch-epyc-facebook-benchmark-8gzzk
2022-09-02 02:13:08,712 be9fa42c6a9b MainThread docker_pt(1/1) vm_util.py:426 DEBUG    Ran: {mkdir -p /home/itr-1/dlrm-pytorch-epyc-facebook-benchmark-8gzzk}
ReturnCode:0
STDOUT: 
STDERR: 
2022-09-02 02:13:08,712 be9fa42c6a9b MainThread docker_pt(1/1) vm_util.py:363 INFO     Running: scp -P 22 -pr -2 -o UserKnownHostsFile=/dev/null -o StrictHostKeyChecking=no -o IdentitiesOnly=no -o PreferredAuthentications=publickey -o PasswordAuthentication=no -o ConnectTimeout=30 -o GSSAPIAuthentication=no -o ServerAliveInterval=30 -o ServerAliveCountMax=10 -i /home/sut/runs/280b72753f6b/perfkitbenchmarker_keyfile -o ControlPath="/tmp/pkb/runs/be9fa42c6a9b/ssh/%h" -o ControlMaster=auto -o ControlPersist=30m -o TCPKeepAlive=yes ubuntu@[3.75.137.230]:/opt/pkb/root-9b7faf1c1f60/dlrm-pytorch-epyc-facebook-benchmark-8gzzk.tar /home/itr-1/dlrm-pytorch-epyc-facebook-benchmark-8gzzk/dlrm-pytorch-epyc-facebook-benchmark-8gzzk.tar
2022-09-02 02:13:09,840 be9fa42c6a9b MainThread docker_pt(1/1) vm_util.py:426 DEBUG    Ran: {scp -P 22 -pr -2 -o UserKnownHostsFile=/dev/null -o StrictHostKeyChecking=no -o IdentitiesOnly=no -o PreferredAuthentications=publickey -o PasswordAuthentication=no -o ConnectTimeout=30 -o GSSAPIAuthentication=no -o ServerAliveInterval=30 -o ServerAliveCountMax=10 -i /home/sut/runs/280b72753f6b/perfkitbenchmarker_keyfile -o ControlPath="/tmp/pkb/runs/be9fa42c6a9b/ssh/%h" -o ControlMaster=auto -o ControlPersist=30m -o TCPKeepAlive=yes ubuntu@[3.75.137.230]:/opt/pkb/root-9b7faf1c1f60/dlrm-pytorch-epyc-facebook-benchmark-8gzzk.tar /home/itr-1/dlrm-pytorch-epyc-facebook-benchmark-8gzzk/dlrm-pytorch-epyc-facebook-benchmark-8gzzk.tar}
ReturnCode:0
STDOUT: 
STDERR: 
2022-09-02 02:13:09,840 be9fa42c6a9b MainThread docker_pt(1/1) vm_util.py:363 INFO     Running: tar xf /home/itr-1/dlrm-pytorch-epyc-facebook-benchmark-8gzzk/dlrm-pytorch-epyc-facebook-benchmark-8gzzk.tar -C /home/itr-1/dlrm-pytorch-epyc-facebook-benchmark-8gzzk
2022-09-02 02:13:09,842 be9fa42c6a9b MainThread docker_pt(1/1) vm_util.py:426 DEBUG    Ran: {tar xf /home/itr-1/dlrm-pytorch-epyc-facebook-benchmark-8gzzk/dlrm-pytorch-epyc-facebook-benchmark-8gzzk.tar -C /home/itr-1/dlrm-pytorch-epyc-facebook-benchmark-8gzzk}
ReturnCode:0
STDOUT: 
STDERR: 
2022-09-02 02:13:09,842 be9fa42c6a9b MainThread docker_pt(1/1) vm_util.py:363 INFO     Running: rm -f /home/itr-1/dlrm-pytorch-epyc-facebook-benchmark-8gzzk/dlrm-pytorch-epyc-facebook-benchmark-8gzzk.tar
2022-09-02 02:13:09,843 be9fa42c6a9b MainThread docker_pt(1/1) vm_util.py:426 DEBUG    Ran: {rm -f /home/itr-1/dlrm-pytorch-epyc-facebook-benchmark-8gzzk/dlrm-pytorch-epyc-facebook-benchmark-8gzzk.tar}
ReturnCode:0
STDOUT: 
STDERR: 
2022-09-02 02:13:09,843 be9fa42c6a9b MainThread docker_pt(1/1) vm_util.py:363 INFO     Running: sh -c cd /home/itr-1 && ./kpi.sh 
2022-09-02 02:13:09,848 be9fa42c6a9b MainThread docker_pt(1/1) vm_util.py:426 DEBUG    Ran: {sh -c cd /home/itr-1 && ./kpi.sh }
ReturnCode:0
STDOUT: TOPOLOGY: DLRM
BENCH_SOURCE: facebook
MODE: throughput
PRECISION: fp32
DATA_TYPE: dummy
PLATFORM: 
BATCH_SIZE: 4
CPI: 16
STEPS: 100
HT: TRUE
SWI: 1
Throughput1 (samples/sec): 3453.706
Throughput2 (samples/sec): 3810.706
[0;34m*Throughput (samples/second): 7264.41[0m

STDERR: 
2022-09-02 02:13:09,851 be9fa42c6a9b MainThread docker_pt(1/1) vm_util.py:363 INFO     Running: ssh -A -p 22 ubuntu@3.75.137.230 -2 -o UserKnownHostsFile=/dev/null -o StrictHostKeyChecking=no -o IdentitiesOnly=no -o PreferredAuthentications=publickey -o PasswordAuthentication=no -o ConnectTimeout=5 -o GSSAPIAuthentication=no -o ServerAliveInterval=30 -o ServerAliveCountMax=10 -i /home/sut/runs/280b72753f6b/perfkitbenchmarker_keyfile -o ControlPath="/tmp/pkb/runs/be9fa42c6a9b/ssh/%h" -o ControlMaster=auto -o ControlPersist=30m -o TCPKeepAlive=yes cat /proc/meminfo | grep MemTotal | awk '{print $2}'
2022-09-02 02:13:10,178 be9fa42c6a9b MainThread docker_pt(1/1) vm_util.py:426 DEBUG    Ran: {ssh -A -p 22 ubuntu@3.75.137.230 -2 -o UserKnownHostsFile=/dev/null -o StrictHostKeyChecking=no -o IdentitiesOnly=no -o PreferredAuthentications=publickey -o PasswordAuthentication=no -o ConnectTimeout=5 -o GSSAPIAuthentication=no -o ServerAliveInterval=30 -o ServerAliveCountMax=10 -i /home/sut/runs/280b72753f6b/perfkitbenchmarker_keyfile -o ControlPath="/tmp/pkb/runs/be9fa42c6a9b/ssh/%h" -o ControlMaster=auto -o ControlPersist=30m -o TCPKeepAlive=yes cat /proc/meminfo | grep MemTotal | awk '{print $2}'}
ReturnCode:0
STDOUT: 64459420

STDERR: 
2022-09-02 02:13:10,179 be9fa42c6a9b MainThread docker_pt(1/1) intel_publisher_models.py:158 INFO     cpu model: AMD EPYC 7R13 Processor
2022-09-02 02:13:10,179 be9fa42c6a9b MainThread docker_pt(1/1) intel_publisher_models.py:160 INFO     num sockets: 1
2022-09-02 02:13:10,179 be9fa42c6a9b MainThread docker_pt(1/1) intel_publisher_models.py:162 INFO     microarch: Zen3
2022-09-02 02:13:10,179 be9fa42c6a9b MainThread docker_pt(1/1) intel_publisher_models.py:168 INFO     frequency: 2.6GHz (Base), 3725 MHz (Max),  (All-core Max)
2022-09-02 02:13:10,179 be9fa42c6a9b MainThread docker_pt(1/1) intel_publisher_models.py:170 INFO     manufacturer: Amazon EC2
2022-09-02 02:13:10,179 be9fa42c6a9b MainThread docker_pt(1/1) intel_publisher_models.py:172 INFO     product name: m6a.4xlarge
2022-09-02 02:13:10,179 be9fa42c6a9b MainThread docker_pt(1/1) intel_publisher_models.py:174 INFO     memory spec: 64GB (1x64GB DDR4 3200 MT/s [Unknown])
2022-09-02 02:13:10,179 be9fa42c6a9b MainThread docker_pt(1/1) vm_util.py:363 INFO     Running: ssh -A -p 22 ubuntu@3.120.235.131 -2 -o UserKnownHostsFile=/dev/null -o StrictHostKeyChecking=no -o IdentitiesOnly=no -o PreferredAuthentications=publickey -o PasswordAuthentication=no -o ConnectTimeout=5 -o GSSAPIAuthentication=no -o ServerAliveInterval=30 -o ServerAliveCountMax=10 -i /home/sut/runs/280b72753f6b/perfkitbenchmarker_keyfile -o ControlPath="/tmp/pkb/runs/be9fa42c6a9b/ssh/%h" -o ControlMaster=auto -o ControlPersist=30m -o TCPKeepAlive=yes cat /proc/meminfo | grep MemTotal | awk '{print $2}'
2022-09-02 02:13:10,491 be9fa42c6a9b MainThread docker_pt(1/1) vm_util.py:426 DEBUG    Ran: {ssh -A -p 22 ubuntu@3.120.235.131 -2 -o UserKnownHostsFile=/dev/null -o StrictHostKeyChecking=no -o IdentitiesOnly=no -o PreferredAuthentications=publickey -o PasswordAuthentication=no -o ConnectTimeout=5 -o GSSAPIAuthentication=no -o ServerAliveInterval=30 -o ServerAliveCountMax=10 -i /home/sut/runs/280b72753f6b/perfkitbenchmarker_keyfile -o ControlPath="/tmp/pkb/runs/be9fa42c6a9b/ssh/%h" -o ControlMaster=auto -o ControlPersist=30m -o TCPKeepAlive=yes cat /proc/meminfo | grep MemTotal | awk '{print $2}'}
ReturnCode:0
STDOUT: 129209272

STDERR: 
2022-09-02 02:13:10,491 be9fa42c6a9b MainThread docker_pt(1/1) intel_publisher_models.py:158 INFO     cpu model: AMD EPYC 7R13 Processor
2022-09-02 02:13:10,491 be9fa42c6a9b MainThread docker_pt(1/1) intel_publisher_models.py:160 INFO     num sockets: 1
2022-09-02 02:13:10,491 be9fa42c6a9b MainThread docker_pt(1/1) intel_publisher_models.py:162 INFO     microarch: Zen3
2022-09-02 02:13:10,491 be9fa42c6a9b MainThread docker_pt(1/1) intel_publisher_models.py:168 INFO     frequency: 2.6GHz (Base), 3725 MHz (Max),  (All-core Max)
2022-09-02 02:13:10,491 be9fa42c6a9b MainThread docker_pt(1/1) intel_publisher_models.py:170 INFO     manufacturer: Amazon EC2
2022-09-02 02:13:10,491 be9fa42c6a9b MainThread docker_pt(1/1) intel_publisher_models.py:172 INFO     product name: c6a.16xlarge
2022-09-02 02:13:10,491 be9fa42c6a9b MainThread docker_pt(1/1) intel_publisher_models.py:174 INFO     memory spec: 128GB (2x64GB DDR4 2933 MT/s [Unknown])
2022-09-02 02:13:10,492 be9fa42c6a9b MainThread docker_pt(1/1) pkb.py:1029 INFO     Cleaning up benchmark dlrm_pytorch_epyc_facebook
2022-09-02 02:13:10,495 be9fa42c6a9b MainThread docker_pt(1/1) vm_util.py:363 INFO     Running: ssh -A -p 22 ubuntu@3.75.137.230 -2 -o UserKnownHostsFile=/dev/null -o StrictHostKeyChecking=no -o IdentitiesOnly=no -o PreferredAuthentications=publickey -o PasswordAuthentication=no -o ConnectTimeout=5 -o GSSAPIAuthentication=no -o ServerAliveInterval=30 -o ServerAliveCountMax=10 -i /home/sut/runs/280b72753f6b/perfkitbenchmarker_keyfile -o ControlPath="/tmp/pkb/runs/be9fa42c6a9b/ssh/%h" -o ControlMaster=auto -o ControlPersist=30m -o TCPKeepAlive=yes sudo rm -rf '/opt/pkb/root-9b7faf1c1f60'
2022-09-02 02:13:10,827 be9fa42c6a9b MainThread docker_pt(1/1) vm_util.py:426 DEBUG    Ran: {ssh -A -p 22 ubuntu@3.75.137.230 -2 -o UserKnownHostsFile=/dev/null -o StrictHostKeyChecking=no -o IdentitiesOnly=no -o PreferredAuthentications=publickey -o PasswordAuthentication=no -o ConnectTimeout=5 -o GSSAPIAuthentication=no -o ServerAliveInterval=30 -o ServerAliveCountMax=10 -i /home/sut/runs/280b72753f6b/perfkitbenchmarker_keyfile -o ControlPath="/tmp/pkb/runs/be9fa42c6a9b/ssh/%h" -o ControlMaster=auto -o ControlPersist=30m -o TCPKeepAlive=yes sudo rm -rf '/opt/pkb/root-9b7faf1c1f60'}
ReturnCode:0
STDOUT: 
STDERR: 
2022-09-02 02:13:10,827 be9fa42c6a9b MainThread docker_pt(1/1) events.py:175 INFO     Receive after_phase signal from :cleanup, not triggering _RunPostRunScript.
2022-09-02 02:13:10,827 be9fa42c6a9b MainThread docker_pt(1/1) pkb.py:1053 INFO     Tearing down resources for benchmark dlrm_pytorch_epyc_facebook
2022-09-02 02:13:10,830 be9fa42c6a9b MainThread docker_pt(1/1) events.py:175 INFO     Receive after_phase signal from :teardown, not triggering _RunPostRunScript.
2022-09-02 02:13:10,834 be9fa42c6a9b MainThread vm_util.py:363 INFO     Running: mkdir -p /tmp/pkb/runs/be9fa42c6a9b/intel_publisher
2022-09-02 02:13:10,835 be9fa42c6a9b MainThread vm_util.py:426 DEBUG    Ran: {mkdir -p /tmp/pkb/runs/be9fa42c6a9b/intel_publisher}
ReturnCode:0
STDOUT: 
STDERR: 
2022-09-02 02:13:10,835 be9fa42c6a9b MainThread intel_publisher.py:268 INFO     Writing data samples to file: /tmp/pkb/runs/be9fa42c6a9b/intel_publisher/perfKitRuns.json
2022-09-02 02:13:10,835 be9fa42c6a9b MainThread intel_publisher.py:268 INFO     Writing data samples to file: /tmp/pkb/runs/be9fa42c6a9b/intel_publisher/platforms.json
2022-09-02 02:13:10,837 be9fa42c6a9b MainThread intel_publisher.py:268 INFO     Writing data samples to file: /tmp/pkb/runs/be9fa42c6a9b/intel_publisher/samplePoints.json
2022-09-02 02:13:10,838 be9fa42c6a9b MainThread intel_publisher.py:268 INFO     Writing data samples to file: /tmp/pkb/runs/be9fa42c6a9b/intel_publisher/metadata.json
2022-09-02 02:13:10,838 be9fa42c6a9b MainThread pkb.py:1438 INFO     Benchmark should not be retried. Finished 1 runs of 1
2022-09-02 02:13:10,838 be9fa42c6a9b MainThread publisher.py:511 INFO     
-------------------------PerfKitBenchmarker Complete Results-------------------------
2022-09-02 02:13:10,839 be9fa42c6a9b MainThread publisher.py:513 INFO     {'metadata': {'AOCC_REPO': 'https://af01p-igk.devtools.intel.com/artifactory/platform_hero-igk-local/zendnn/aocc-compiler-3.0.0.tar',
              'AOCC_VER': '3.0.0',
              'AOCL_REPO': 'https://af01p-igk.devtools.intel.com/artifactory/platform_hero-igk-local/zendnn/aocl-linux-aocc-3.0-6.tar.gz',
              'AOCL_VER': '3.0-6',
              'CONDA_REPO': 'https://repo.anaconda.com/miniconda/Miniconda3-py38_4.12.0-Linux-x86_64.sh',
              'CONDA_VER': 'py38_4.12.0',
              'DATASET_REPO': 'https://ubit-artifactory-or.intel.com/artifactory/dpgpaivsoworkloads-or-local/dlboost/dataset/pytorch/dlrm_inference_V1.tar',
              'DATASET_VER': 'inference_V1',
              'DLRM_BENCH_REPO': 'https://github.com/facebookresearch/dlrm',
              'DLRM_BENCH_VER': '11afc52120c5baaf0bfe418c610bc5cccb9c5777',
              'JEMALLOC_REPO': 'https://github.com/jemalloc/jemalloc/archive/refs/tags/5.3.0.tar.gz',
              'JEMALLOC_VER': '5.3.0',
              'MLPERF_LOGGING_REPO': 'https://github.com/mlcommons/logging/archive/refs/tags/2.0.0-rc4.tar.gz',
              'MLPERF_LOGGING_VER': '2.0.0-rc4',
              'OS_IMAGE': 'ubuntu',
              'OS_VER': 20.04,
              'PLATFORM': '',
              'ROME': '',
              'ZENDNN_REPO': 'https://af01p-igk.devtools.intel.com/artifactory/platform_hero-igk-local/zendnn/PT_v_ZenDNN_v3.2_Python_v.zip',
              'ZENDNN_VER': 3.2,
              'batch_size': 4.0,
              'bench_source': 'facebook',
              'controller_/dev/loop0': 26324992,
              'controller_/dev/loop1': 58261504,
              'controller_/dev/loop2': 64966656,
              'controller_/dev/loop3': 107986944,
              'controller_/dev/loop4': 49242112,
              'controller_/dev/nvme0n1': 107374182400,
              'controller_cloud': 'Static',
              'controller_image': None,
              'controller_kernel_release': '5.15.0-1019-aws',
              'controller_num_cpus': 16,
              'controller_numa_node_count': 1,
              'controller_os_info': 'Ubuntu 22.04.1 LTS',
              'controller_os_type': 'ubuntu1804',
              'controller_tcp_congestion_control': 'cubic',
              'controller_threads_per_core': 2,
              'controller_vm_count': 1,
              'controller_zone': 'Static - ubuntu@3.75.137.230',
              'cpi': 16.0,
              'data_type': 'dummy',
              'ht': 'TRUE',
              'mode': 'throughput',
              'perfkitbenchmarker_version': 'unknown',
              'precision': 'fp32',
              'run_number': 0,
              'steps': 100.0,
              'swi': 1.0,
              'testcase': 'test_aws_dlrm_pytorch_epyc_facebook_fp32_throughput_dummy_customized',
              'topology': 'DLRM',
              'uid': 'docker_pt0',
              'user_cmdline': '/PerfKitBenchmarker/pkb.py --owner=sf-ai-ziyi '
                              '--sar --sar_interval=1 '
                              '--trace_allow_benchmark_control '
                              '--run_uri=be9fa42c6a9b --temp_dir=/tmp/pkb '
                              '--benchmarks=docker_pt '
                              '--benchmark_config_file=/home/cumulus-config.yaml.mod.yaml '
                              '--ignore_package_requirements '
                              '--skopeo_insecure_registries=10.165.31.58:5000,harbor-npg.pact.intel.com,r49s04.gv.intel.com:10443,r18s05.gv.intel.com:10443,10.219.170.195:5000,10.54.45.149:10443,amr-registry.caas.intel.com,10.239.241.58:5000,ad09-28-wcp-storage.jf.intel.com:5000,marceline.zpn.intel.com,vcaa-jf5-lab-1.jf.intel.com:10443,dcsorepo.jf.intel.com,jf3jd011.jf.intel.com:5000,r49s04.gv.intel.com,0.0.0.0,0.0.0.0:5000,10.166.44.134:5000,10.219.170.133:5000 '
                              '--run_stage_iterations=1 '
                              '--install_packages=false --dpt_reuse_sut',
              'worker_/dev/loop0': 26324992,
              'worker_/dev/loop1': 58261504,
              'worker_/dev/loop2': 64966656,
              'worker_/dev/loop3': 107986944,
              'worker_/dev/loop4': 49242112,
              'worker_/dev/nvme0n1': 536870912000,
              'worker_cloud': 'Static',
              'worker_image': None,
              'worker_kernel_release': '5.15.0-1019-aws',
              'worker_num_cpus': 64,
              'worker_numa_node_count': 2,
              'worker_os_info': 'Ubuntu 22.04.1 LTS',
              'worker_os_type': 'ubuntu1804',
              'worker_tcp_congestion_control': 'cubic',
              'worker_threads_per_core': 2,
              'worker_vm_count': 1,
              'worker_zone': 'Static - ubuntu@3.120.235.131'},
 'metric': 'BATCH_SIZE',
 'official': False,
 'owner': 'sf-ai-ziyi',
 'product_name': 'PerfKitBenchmarker',
 'run_uri': 'be9fa42c6a9b-6184f729-abcc-4515-aa88-324cdbc22d07',
 'sample_uri': '13aa758f-bd99-41c1-9ae8-e54fa4db81ad',
 'test': 'dlrm_pytorch_epyc_facebook',
 'timestamp': 1662109989.8485422,
 'unit': '-',
 'value': 4.0}
2022-09-02 02:13:10,840 be9fa42c6a9b MainThread publisher.py:513 INFO     {'metadata': {'AOCC_REPO': 'https://af01p-igk.devtools.intel.com/artifactory/platform_hero-igk-local/zendnn/aocc-compiler-3.0.0.tar',
              'AOCC_VER': '3.0.0',
              'AOCL_REPO': 'https://af01p-igk.devtools.intel.com/artifactory/platform_hero-igk-local/zendnn/aocl-linux-aocc-3.0-6.tar.gz',
              'AOCL_VER': '3.0-6',
              'CONDA_REPO': 'https://repo.anaconda.com/miniconda/Miniconda3-py38_4.12.0-Linux-x86_64.sh',
              'CONDA_VER': 'py38_4.12.0',
              'DATASET_REPO': 'https://ubit-artifactory-or.intel.com/artifactory/dpgpaivsoworkloads-or-local/dlboost/dataset/pytorch/dlrm_inference_V1.tar',
              'DATASET_VER': 'inference_V1',
              'DLRM_BENCH_REPO': 'https://github.com/facebookresearch/dlrm',
              'DLRM_BENCH_VER': '11afc52120c5baaf0bfe418c610bc5cccb9c5777',
              'JEMALLOC_REPO': 'https://github.com/jemalloc/jemalloc/archive/refs/tags/5.3.0.tar.gz',
              'JEMALLOC_VER': '5.3.0',
              'MLPERF_LOGGING_REPO': 'https://github.com/mlcommons/logging/archive/refs/tags/2.0.0-rc4.tar.gz',
              'MLPERF_LOGGING_VER': '2.0.0-rc4',
              'OS_IMAGE': 'ubuntu',
              'OS_VER': 20.04,
              'PLATFORM': '',
              'ROME': '',
              'ZENDNN_REPO': 'https://af01p-igk.devtools.intel.com/artifactory/platform_hero-igk-local/zendnn/PT_v_ZenDNN_v3.2_Python_v.zip',
              'ZENDNN_VER': 3.2,
              'batch_size': 4.0,
              'bench_source': 'facebook',
              'controller_/dev/loop0': 26324992,
              'controller_/dev/loop1': 58261504,
              'controller_/dev/loop2': 64966656,
              'controller_/dev/loop3': 107986944,
              'controller_/dev/loop4': 49242112,
              'controller_/dev/nvme0n1': 107374182400,
              'controller_cloud': 'Static',
              'controller_image': None,
              'controller_kernel_release': '5.15.0-1019-aws',
              'controller_num_cpus': 16,
              'controller_numa_node_count': 1,
              'controller_os_info': 'Ubuntu 22.04.1 LTS',
              'controller_os_type': 'ubuntu1804',
              'controller_tcp_congestion_control': 'cubic',
              'controller_threads_per_core': 2,
              'controller_vm_count': 1,
              'controller_zone': 'Static - ubuntu@3.75.137.230',
              'cpi': 16.0,
              'data_type': 'dummy',
              'ht': 'TRUE',
              'mode': 'throughput',
              'perfkitbenchmarker_version': 'unknown',
              'precision': 'fp32',
              'run_number': 0,
              'steps': 100.0,
              'swi': 1.0,
              'testcase': 'test_aws_dlrm_pytorch_epyc_facebook_fp32_throughput_dummy_customized',
              'topology': 'DLRM',
              'uid': 'docker_pt0',
              'user_cmdline': '/PerfKitBenchmarker/pkb.py --owner=sf-ai-ziyi '
                              '--sar --sar_interval=1 '
                              '--trace_allow_benchmark_control '
                              '--run_uri=be9fa42c6a9b --temp_dir=/tmp/pkb '
                              '--benchmarks=docker_pt '
                              '--benchmark_config_file=/home/cumulus-config.yaml.mod.yaml '
                              '--ignore_package_requirements '
                              '--skopeo_insecure_registries=10.165.31.58:5000,harbor-npg.pact.intel.com,r49s04.gv.intel.com:10443,r18s05.gv.intel.com:10443,10.219.170.195:5000,10.54.45.149:10443,amr-registry.caas.intel.com,10.239.241.58:5000,ad09-28-wcp-storage.jf.intel.com:5000,marceline.zpn.intel.com,vcaa-jf5-lab-1.jf.intel.com:10443,dcsorepo.jf.intel.com,jf3jd011.jf.intel.com:5000,r49s04.gv.intel.com,0.0.0.0,0.0.0.0:5000,10.166.44.134:5000,10.219.170.133:5000 '
                              '--run_stage_iterations=1 '
                              '--install_packages=false --dpt_reuse_sut',
              'worker_/dev/loop0': 26324992,
              'worker_/dev/loop1': 58261504,
              'worker_/dev/loop2': 64966656,
              'worker_/dev/loop3': 107986944,
              'worker_/dev/loop4': 49242112,
              'worker_/dev/nvme0n1': 536870912000,
              'worker_cloud': 'Static',
              'worker_image': None,
              'worker_kernel_release': '5.15.0-1019-aws',
              'worker_num_cpus': 64,
              'worker_numa_node_count': 2,
              'worker_os_info': 'Ubuntu 22.04.1 LTS',
              'worker_os_type': 'ubuntu1804',
              'worker_tcp_congestion_control': 'cubic',
              'worker_threads_per_core': 2,
              'worker_vm_count': 1,
              'worker_zone': 'Static - ubuntu@3.120.235.131'},
 'metric': 'CPI',
 'official': False,
 'owner': 'sf-ai-ziyi',
 'product_name': 'PerfKitBenchmarker',
 'run_uri': 'be9fa42c6a9b-6184f729-abcc-4515-aa88-324cdbc22d07',
 'sample_uri': 'dbde1667-2cf0-4634-80a8-f2ee79aeb653',
 'test': 'dlrm_pytorch_epyc_facebook',
 'timestamp': 1662109989.84855,
 'unit': '-',
 'value': 16.0}
2022-09-02 02:13:10,841 be9fa42c6a9b MainThread publisher.py:513 INFO     {'metadata': {'AOCC_REPO': 'https://af01p-igk.devtools.intel.com/artifactory/platform_hero-igk-local/zendnn/aocc-compiler-3.0.0.tar',
              'AOCC_VER': '3.0.0',
              'AOCL_REPO': 'https://af01p-igk.devtools.intel.com/artifactory/platform_hero-igk-local/zendnn/aocl-linux-aocc-3.0-6.tar.gz',
              'AOCL_VER': '3.0-6',
              'CONDA_REPO': 'https://repo.anaconda.com/miniconda/Miniconda3-py38_4.12.0-Linux-x86_64.sh',
              'CONDA_VER': 'py38_4.12.0',
              'DATASET_REPO': 'https://ubit-artifactory-or.intel.com/artifactory/dpgpaivsoworkloads-or-local/dlboost/dataset/pytorch/dlrm_inference_V1.tar',
              'DATASET_VER': 'inference_V1',
              'DLRM_BENCH_REPO': 'https://github.com/facebookresearch/dlrm',
              'DLRM_BENCH_VER': '11afc52120c5baaf0bfe418c610bc5cccb9c5777',
              'JEMALLOC_REPO': 'https://github.com/jemalloc/jemalloc/archive/refs/tags/5.3.0.tar.gz',
              'JEMALLOC_VER': '5.3.0',
              'MLPERF_LOGGING_REPO': 'https://github.com/mlcommons/logging/archive/refs/tags/2.0.0-rc4.tar.gz',
              'MLPERF_LOGGING_VER': '2.0.0-rc4',
              'OS_IMAGE': 'ubuntu',
              'OS_VER': 20.04,
              'PLATFORM': '',
              'ROME': '',
              'ZENDNN_REPO': 'https://af01p-igk.devtools.intel.com/artifactory/platform_hero-igk-local/zendnn/PT_v_ZenDNN_v3.2_Python_v.zip',
              'ZENDNN_VER': 3.2,
              'batch_size': 4.0,
              'bench_source': 'facebook',
              'controller_/dev/loop0': 26324992,
              'controller_/dev/loop1': 58261504,
              'controller_/dev/loop2': 64966656,
              'controller_/dev/loop3': 107986944,
              'controller_/dev/loop4': 49242112,
              'controller_/dev/nvme0n1': 107374182400,
              'controller_cloud': 'Static',
              'controller_image': None,
              'controller_kernel_release': '5.15.0-1019-aws',
              'controller_num_cpus': 16,
              'controller_numa_node_count': 1,
              'controller_os_info': 'Ubuntu 22.04.1 LTS',
              'controller_os_type': 'ubuntu1804',
              'controller_tcp_congestion_control': 'cubic',
              'controller_threads_per_core': 2,
              'controller_vm_count': 1,
              'controller_zone': 'Static - ubuntu@3.75.137.230',
              'cpi': 16.0,
              'data_type': 'dummy',
              'ht': 'TRUE',
              'mode': 'throughput',
              'perfkitbenchmarker_version': 'unknown',
              'precision': 'fp32',
              'run_number': 0,
              'steps': 100.0,
              'swi': 1.0,
              'testcase': 'test_aws_dlrm_pytorch_epyc_facebook_fp32_throughput_dummy_customized',
              'topology': 'DLRM',
              'uid': 'docker_pt0',
              'user_cmdline': '/PerfKitBenchmarker/pkb.py --owner=sf-ai-ziyi '
                              '--sar --sar_interval=1 '
                              '--trace_allow_benchmark_control '
                              '--run_uri=be9fa42c6a9b --temp_dir=/tmp/pkb '
                              '--benchmarks=docker_pt '
                              '--benchmark_config_file=/home/cumulus-config.yaml.mod.yaml '
                              '--ignore_package_requirements '
                              '--skopeo_insecure_registries=10.165.31.58:5000,harbor-npg.pact.intel.com,r49s04.gv.intel.com:10443,r18s05.gv.intel.com:10443,10.219.170.195:5000,10.54.45.149:10443,amr-registry.caas.intel.com,10.239.241.58:5000,ad09-28-wcp-storage.jf.intel.com:5000,marceline.zpn.intel.com,vcaa-jf5-lab-1.jf.intel.com:10443,dcsorepo.jf.intel.com,jf3jd011.jf.intel.com:5000,r49s04.gv.intel.com,0.0.0.0,0.0.0.0:5000,10.166.44.134:5000,10.219.170.133:5000 '
                              '--run_stage_iterations=1 '
                              '--install_packages=false --dpt_reuse_sut',
              'worker_/dev/loop0': 26324992,
              'worker_/dev/loop1': 58261504,
              'worker_/dev/loop2': 64966656,
              'worker_/dev/loop3': 107986944,
              'worker_/dev/loop4': 49242112,
              'worker_/dev/nvme0n1': 536870912000,
              'worker_cloud': 'Static',
              'worker_image': None,
              'worker_kernel_release': '5.15.0-1019-aws',
              'worker_num_cpus': 64,
              'worker_numa_node_count': 2,
              'worker_os_info': 'Ubuntu 22.04.1 LTS',
              'worker_os_type': 'ubuntu1804',
              'worker_tcp_congestion_control': 'cubic',
              'worker_threads_per_core': 2,
              'worker_vm_count': 1,
              'worker_zone': 'Static - ubuntu@3.120.235.131'},
 'metric': 'STEPS',
 'official': False,
 'owner': 'sf-ai-ziyi',
 'product_name': 'PerfKitBenchmarker',
 'run_uri': 'be9fa42c6a9b-6184f729-abcc-4515-aa88-324cdbc22d07',
 'sample_uri': 'ddc355d2-9350-4714-a93c-d5128b1c3f6e',
 'test': 'dlrm_pytorch_epyc_facebook',
 'timestamp': 1662109989.8485537,
 'unit': '-',
 'value': 100.0}
2022-09-02 02:13:10,842 be9fa42c6a9b MainThread publisher.py:513 INFO     {'metadata': {'AOCC_REPO': 'https://af01p-igk.devtools.intel.com/artifactory/platform_hero-igk-local/zendnn/aocc-compiler-3.0.0.tar',
              'AOCC_VER': '3.0.0',
              'AOCL_REPO': 'https://af01p-igk.devtools.intel.com/artifactory/platform_hero-igk-local/zendnn/aocl-linux-aocc-3.0-6.tar.gz',
              'AOCL_VER': '3.0-6',
              'CONDA_REPO': 'https://repo.anaconda.com/miniconda/Miniconda3-py38_4.12.0-Linux-x86_64.sh',
              'CONDA_VER': 'py38_4.12.0',
              'DATASET_REPO': 'https://ubit-artifactory-or.intel.com/artifactory/dpgpaivsoworkloads-or-local/dlboost/dataset/pytorch/dlrm_inference_V1.tar',
              'DATASET_VER': 'inference_V1',
              'DLRM_BENCH_REPO': 'https://github.com/facebookresearch/dlrm',
              'DLRM_BENCH_VER': '11afc52120c5baaf0bfe418c610bc5cccb9c5777',
              'JEMALLOC_REPO': 'https://github.com/jemalloc/jemalloc/archive/refs/tags/5.3.0.tar.gz',
              'JEMALLOC_VER': '5.3.0',
              'MLPERF_LOGGING_REPO': 'https://github.com/mlcommons/logging/archive/refs/tags/2.0.0-rc4.tar.gz',
              'MLPERF_LOGGING_VER': '2.0.0-rc4',
              'OS_IMAGE': 'ubuntu',
              'OS_VER': 20.04,
              'PLATFORM': '',
              'ROME': '',
              'ZENDNN_REPO': 'https://af01p-igk.devtools.intel.com/artifactory/platform_hero-igk-local/zendnn/PT_v_ZenDNN_v3.2_Python_v.zip',
              'ZENDNN_VER': 3.2,
              'batch_size': 4.0,
              'bench_source': 'facebook',
              'controller_/dev/loop0': 26324992,
              'controller_/dev/loop1': 58261504,
              'controller_/dev/loop2': 64966656,
              'controller_/dev/loop3': 107986944,
              'controller_/dev/loop4': 49242112,
              'controller_/dev/nvme0n1': 107374182400,
              'controller_cloud': 'Static',
              'controller_image': None,
              'controller_kernel_release': '5.15.0-1019-aws',
              'controller_num_cpus': 16,
              'controller_numa_node_count': 1,
              'controller_os_info': 'Ubuntu 22.04.1 LTS',
              'controller_os_type': 'ubuntu1804',
              'controller_tcp_congestion_control': 'cubic',
              'controller_threads_per_core': 2,
              'controller_vm_count': 1,
              'controller_zone': 'Static - ubuntu@3.75.137.230',
              'cpi': 16.0,
              'data_type': 'dummy',
              'ht': 'TRUE',
              'mode': 'throughput',
              'perfkitbenchmarker_version': 'unknown',
              'precision': 'fp32',
              'run_number': 0,
              'steps': 100.0,
              'swi': 1.0,
              'testcase': 'test_aws_dlrm_pytorch_epyc_facebook_fp32_throughput_dummy_customized',
              'topology': 'DLRM',
              'uid': 'docker_pt0',
              'user_cmdline': '/PerfKitBenchmarker/pkb.py --owner=sf-ai-ziyi '
                              '--sar --sar_interval=1 '
                              '--trace_allow_benchmark_control '
                              '--run_uri=be9fa42c6a9b --temp_dir=/tmp/pkb '
                              '--benchmarks=docker_pt '
                              '--benchmark_config_file=/home/cumulus-config.yaml.mod.yaml '
                              '--ignore_package_requirements '
                              '--skopeo_insecure_registries=10.165.31.58:5000,harbor-npg.pact.intel.com,r49s04.gv.intel.com:10443,r18s05.gv.intel.com:10443,10.219.170.195:5000,10.54.45.149:10443,amr-registry.caas.intel.com,10.239.241.58:5000,ad09-28-wcp-storage.jf.intel.com:5000,marceline.zpn.intel.com,vcaa-jf5-lab-1.jf.intel.com:10443,dcsorepo.jf.intel.com,jf3jd011.jf.intel.com:5000,r49s04.gv.intel.com,0.0.0.0,0.0.0.0:5000,10.166.44.134:5000,10.219.170.133:5000 '
                              '--run_stage_iterations=1 '
                              '--install_packages=false --dpt_reuse_sut',
              'worker_/dev/loop0': 26324992,
              'worker_/dev/loop1': 58261504,
              'worker_/dev/loop2': 64966656,
              'worker_/dev/loop3': 107986944,
              'worker_/dev/loop4': 49242112,
              'worker_/dev/nvme0n1': 536870912000,
              'worker_cloud': 'Static',
              'worker_image': None,
              'worker_kernel_release': '5.15.0-1019-aws',
              'worker_num_cpus': 64,
              'worker_numa_node_count': 2,
              'worker_os_info': 'Ubuntu 22.04.1 LTS',
              'worker_os_type': 'ubuntu1804',
              'worker_tcp_congestion_control': 'cubic',
              'worker_threads_per_core': 2,
              'worker_vm_count': 1,
              'worker_zone': 'Static - ubuntu@3.120.235.131'},
 'metric': 'SWI',
 'official': False,
 'owner': 'sf-ai-ziyi',
 'product_name': 'PerfKitBenchmarker',
 'run_uri': 'be9fa42c6a9b-6184f729-abcc-4515-aa88-324cdbc22d07',
 'sample_uri': 'c474378b-ff97-4080-95ee-05887c0561eb',
 'test': 'dlrm_pytorch_epyc_facebook',
 'timestamp': 1662109989.8485587,
 'unit': '-',
 'value': 1.0}
2022-09-02 02:13:10,843 be9fa42c6a9b MainThread publisher.py:513 INFO     {'metadata': {'AOCC_REPO': 'https://af01p-igk.devtools.intel.com/artifactory/platform_hero-igk-local/zendnn/aocc-compiler-3.0.0.tar',
              'AOCC_VER': '3.0.0',
              'AOCL_REPO': 'https://af01p-igk.devtools.intel.com/artifactory/platform_hero-igk-local/zendnn/aocl-linux-aocc-3.0-6.tar.gz',
              'AOCL_VER': '3.0-6',
              'CONDA_REPO': 'https://repo.anaconda.com/miniconda/Miniconda3-py38_4.12.0-Linux-x86_64.sh',
              'CONDA_VER': 'py38_4.12.0',
              'DATASET_REPO': 'https://ubit-artifactory-or.intel.com/artifactory/dpgpaivsoworkloads-or-local/dlboost/dataset/pytorch/dlrm_inference_V1.tar',
              'DATASET_VER': 'inference_V1',
              'DLRM_BENCH_REPO': 'https://github.com/facebookresearch/dlrm',
              'DLRM_BENCH_VER': '11afc52120c5baaf0bfe418c610bc5cccb9c5777',
              'JEMALLOC_REPO': 'https://github.com/jemalloc/jemalloc/archive/refs/tags/5.3.0.tar.gz',
              'JEMALLOC_VER': '5.3.0',
              'MLPERF_LOGGING_REPO': 'https://github.com/mlcommons/logging/archive/refs/tags/2.0.0-rc4.tar.gz',
              'MLPERF_LOGGING_VER': '2.0.0-rc4',
              'OS_IMAGE': 'ubuntu',
              'OS_VER': 20.04,
              'PLATFORM': '',
              'ROME': '',
              'ZENDNN_REPO': 'https://af01p-igk.devtools.intel.com/artifactory/platform_hero-igk-local/zendnn/PT_v_ZenDNN_v3.2_Python_v.zip',
              'ZENDNN_VER': 3.2,
              'batch_size': 4.0,
              'bench_source': 'facebook',
              'controller_/dev/loop0': 26324992,
              'controller_/dev/loop1': 58261504,
              'controller_/dev/loop2': 64966656,
              'controller_/dev/loop3': 107986944,
              'controller_/dev/loop4': 49242112,
              'controller_/dev/nvme0n1': 107374182400,
              'controller_cloud': 'Static',
              'controller_image': None,
              'controller_kernel_release': '5.15.0-1019-aws',
              'controller_num_cpus': 16,
              'controller_numa_node_count': 1,
              'controller_os_info': 'Ubuntu 22.04.1 LTS',
              'controller_os_type': 'ubuntu1804',
              'controller_tcp_congestion_control': 'cubic',
              'controller_threads_per_core': 2,
              'controller_vm_count': 1,
              'controller_zone': 'Static - ubuntu@3.75.137.230',
              'cpi': 16.0,
              'data_type': 'dummy',
              'ht': 'TRUE',
              'mode': 'throughput',
              'perfkitbenchmarker_version': 'unknown',
              'precision': 'fp32',
              'run_number': 0,
              'steps': 100.0,
              'swi': 1.0,
              'testcase': 'test_aws_dlrm_pytorch_epyc_facebook_fp32_throughput_dummy_customized',
              'topology': 'DLRM',
              'uid': 'docker_pt0',
              'user_cmdline': '/PerfKitBenchmarker/pkb.py --owner=sf-ai-ziyi '
                              '--sar --sar_interval=1 '
                              '--trace_allow_benchmark_control '
                              '--run_uri=be9fa42c6a9b --temp_dir=/tmp/pkb '
                              '--benchmarks=docker_pt '
                              '--benchmark_config_file=/home/cumulus-config.yaml.mod.yaml '
                              '--ignore_package_requirements '
                              '--skopeo_insecure_registries=10.165.31.58:5000,harbor-npg.pact.intel.com,r49s04.gv.intel.com:10443,r18s05.gv.intel.com:10443,10.219.170.195:5000,10.54.45.149:10443,amr-registry.caas.intel.com,10.239.241.58:5000,ad09-28-wcp-storage.jf.intel.com:5000,marceline.zpn.intel.com,vcaa-jf5-lab-1.jf.intel.com:10443,dcsorepo.jf.intel.com,jf3jd011.jf.intel.com:5000,r49s04.gv.intel.com,0.0.0.0,0.0.0.0:5000,10.166.44.134:5000,10.219.170.133:5000 '
                              '--run_stage_iterations=1 '
                              '--install_packages=false --dpt_reuse_sut',
              'worker_/dev/loop0': 26324992,
              'worker_/dev/loop1': 58261504,
              'worker_/dev/loop2': 64966656,
              'worker_/dev/loop3': 107986944,
              'worker_/dev/loop4': 49242112,
              'worker_/dev/nvme0n1': 536870912000,
              'worker_cloud': 'Static',
              'worker_image': None,
              'worker_kernel_release': '5.15.0-1019-aws',
              'worker_num_cpus': 64,
              'worker_numa_node_count': 2,
              'worker_os_info': 'Ubuntu 22.04.1 LTS',
              'worker_os_type': 'ubuntu1804',
              'worker_tcp_congestion_control': 'cubic',
              'worker_threads_per_core': 2,
              'worker_vm_count': 1,
              'worker_zone': 'Static - ubuntu@3.120.235.131'},
 'metric': 'Throughput1',
 'official': False,
 'owner': 'sf-ai-ziyi',
 'product_name': 'PerfKitBenchmarker',
 'run_uri': 'be9fa42c6a9b-6184f729-abcc-4515-aa88-324cdbc22d07',
 'sample_uri': '9b183f0e-33f1-4449-991a-f49694d8ce0a',
 'test': 'dlrm_pytorch_epyc_facebook',
 'timestamp': 1662109989.8485622,
 'unit': 'samples/sec',
 'value': 3453.706}
2022-09-02 02:13:10,844 be9fa42c6a9b MainThread publisher.py:513 INFO     {'metadata': {'AOCC_REPO': 'https://af01p-igk.devtools.intel.com/artifactory/platform_hero-igk-local/zendnn/aocc-compiler-3.0.0.tar',
              'AOCC_VER': '3.0.0',
              'AOCL_REPO': 'https://af01p-igk.devtools.intel.com/artifactory/platform_hero-igk-local/zendnn/aocl-linux-aocc-3.0-6.tar.gz',
              'AOCL_VER': '3.0-6',
              'CONDA_REPO': 'https://repo.anaconda.com/miniconda/Miniconda3-py38_4.12.0-Linux-x86_64.sh',
              'CONDA_VER': 'py38_4.12.0',
              'DATASET_REPO': 'https://ubit-artifactory-or.intel.com/artifactory/dpgpaivsoworkloads-or-local/dlboost/dataset/pytorch/dlrm_inference_V1.tar',
              'DATASET_VER': 'inference_V1',
              'DLRM_BENCH_REPO': 'https://github.com/facebookresearch/dlrm',
              'DLRM_BENCH_VER': '11afc52120c5baaf0bfe418c610bc5cccb9c5777',
              'JEMALLOC_REPO': 'https://github.com/jemalloc/jemalloc/archive/refs/tags/5.3.0.tar.gz',
              'JEMALLOC_VER': '5.3.0',
              'MLPERF_LOGGING_REPO': 'https://github.com/mlcommons/logging/archive/refs/tags/2.0.0-rc4.tar.gz',
              'MLPERF_LOGGING_VER': '2.0.0-rc4',
              'OS_IMAGE': 'ubuntu',
              'OS_VER': 20.04,
              'PLATFORM': '',
              'ROME': '',
              'ZENDNN_REPO': 'https://af01p-igk.devtools.intel.com/artifactory/platform_hero-igk-local/zendnn/PT_v_ZenDNN_v3.2_Python_v.zip',
              'ZENDNN_VER': 3.2,
              'batch_size': 4.0,
              'bench_source': 'facebook',
              'controller_/dev/loop0': 26324992,
              'controller_/dev/loop1': 58261504,
              'controller_/dev/loop2': 64966656,
              'controller_/dev/loop3': 107986944,
              'controller_/dev/loop4': 49242112,
              'controller_/dev/nvme0n1': 107374182400,
              'controller_cloud': 'Static',
              'controller_image': None,
              'controller_kernel_release': '5.15.0-1019-aws',
              'controller_num_cpus': 16,
              'controller_numa_node_count': 1,
              'controller_os_info': 'Ubuntu 22.04.1 LTS',
              'controller_os_type': 'ubuntu1804',
              'controller_tcp_congestion_control': 'cubic',
              'controller_threads_per_core': 2,
              'controller_vm_count': 1,
              'controller_zone': 'Static - ubuntu@3.75.137.230',
              'cpi': 16.0,
              'data_type': 'dummy',
              'ht': 'TRUE',
              'mode': 'throughput',
              'perfkitbenchmarker_version': 'unknown',
              'precision': 'fp32',
              'run_number': 0,
              'steps': 100.0,
              'swi': 1.0,
              'testcase': 'test_aws_dlrm_pytorch_epyc_facebook_fp32_throughput_dummy_customized',
              'topology': 'DLRM',
              'uid': 'docker_pt0',
              'user_cmdline': '/PerfKitBenchmarker/pkb.py --owner=sf-ai-ziyi '
                              '--sar --sar_interval=1 '
                              '--trace_allow_benchmark_control '
                              '--run_uri=be9fa42c6a9b --temp_dir=/tmp/pkb '
                              '--benchmarks=docker_pt '
                              '--benchmark_config_file=/home/cumulus-config.yaml.mod.yaml '
                              '--ignore_package_requirements '
                              '--skopeo_insecure_registries=10.165.31.58:5000,harbor-npg.pact.intel.com,r49s04.gv.intel.com:10443,r18s05.gv.intel.com:10443,10.219.170.195:5000,10.54.45.149:10443,amr-registry.caas.intel.com,10.239.241.58:5000,ad09-28-wcp-storage.jf.intel.com:5000,marceline.zpn.intel.com,vcaa-jf5-lab-1.jf.intel.com:10443,dcsorepo.jf.intel.com,jf3jd011.jf.intel.com:5000,r49s04.gv.intel.com,0.0.0.0,0.0.0.0:5000,10.166.44.134:5000,10.219.170.133:5000 '
                              '--run_stage_iterations=1 '
                              '--install_packages=false --dpt_reuse_sut',
              'worker_/dev/loop0': 26324992,
              'worker_/dev/loop1': 58261504,
              'worker_/dev/loop2': 64966656,
              'worker_/dev/loop3': 107986944,
              'worker_/dev/loop4': 49242112,
              'worker_/dev/nvme0n1': 536870912000,
              'worker_cloud': 'Static',
              'worker_image': None,
              'worker_kernel_release': '5.15.0-1019-aws',
              'worker_num_cpus': 64,
              'worker_numa_node_count': 2,
              'worker_os_info': 'Ubuntu 22.04.1 LTS',
              'worker_os_type': 'ubuntu1804',
              'worker_tcp_congestion_control': 'cubic',
              'worker_threads_per_core': 2,
              'worker_vm_count': 1,
              'worker_zone': 'Static - ubuntu@3.120.235.131'},
 'metric': 'Throughput2',
 'official': False,
 'owner': 'sf-ai-ziyi',
 'product_name': 'PerfKitBenchmarker',
 'run_uri': 'be9fa42c6a9b-6184f729-abcc-4515-aa88-324cdbc22d07',
 'sample_uri': '56ea32cc-5cc4-4a86-8a0d-ed60b17b7e2c',
 'test': 'dlrm_pytorch_epyc_facebook',
 'timestamp': 1662109989.8485656,
 'unit': 'samples/sec',
 'value': 3810.706}
2022-09-02 02:13:10,845 be9fa42c6a9b MainThread publisher.py:513 INFO     {'metadata': {'AOCC_REPO': 'https://af01p-igk.devtools.intel.com/artifactory/platform_hero-igk-local/zendnn/aocc-compiler-3.0.0.tar',
              'AOCC_VER': '3.0.0',
              'AOCL_REPO': 'https://af01p-igk.devtools.intel.com/artifactory/platform_hero-igk-local/zendnn/aocl-linux-aocc-3.0-6.tar.gz',
              'AOCL_VER': '3.0-6',
              'CONDA_REPO': 'https://repo.anaconda.com/miniconda/Miniconda3-py38_4.12.0-Linux-x86_64.sh',
              'CONDA_VER': 'py38_4.12.0',
              'DATASET_REPO': 'https://ubit-artifactory-or.intel.com/artifactory/dpgpaivsoworkloads-or-local/dlboost/dataset/pytorch/dlrm_inference_V1.tar',
              'DATASET_VER': 'inference_V1',
              'DLRM_BENCH_REPO': 'https://github.com/facebookresearch/dlrm',
              'DLRM_BENCH_VER': '11afc52120c5baaf0bfe418c610bc5cccb9c5777',
              'JEMALLOC_REPO': 'https://github.com/jemalloc/jemalloc/archive/refs/tags/5.3.0.tar.gz',
              'JEMALLOC_VER': '5.3.0',
              'MLPERF_LOGGING_REPO': 'https://github.com/mlcommons/logging/archive/refs/tags/2.0.0-rc4.tar.gz',
              'MLPERF_LOGGING_VER': '2.0.0-rc4',
              'OS_IMAGE': 'ubuntu',
              'OS_VER': 20.04,
              'PLATFORM': '',
              'ROME': '',
              'ZENDNN_REPO': 'https://af01p-igk.devtools.intel.com/artifactory/platform_hero-igk-local/zendnn/PT_v_ZenDNN_v3.2_Python_v.zip',
              'ZENDNN_VER': 3.2,
              'batch_size': 4.0,
              'bench_source': 'facebook',
              'controller_/dev/loop0': 26324992,
              'controller_/dev/loop1': 58261504,
              'controller_/dev/loop2': 64966656,
              'controller_/dev/loop3': 107986944,
              'controller_/dev/loop4': 49242112,
              'controller_/dev/nvme0n1': 107374182400,
              'controller_cloud': 'Static',
              'controller_image': None,
              'controller_kernel_release': '5.15.0-1019-aws',
              'controller_num_cpus': 16,
              'controller_numa_node_count': 1,
              'controller_os_info': 'Ubuntu 22.04.1 LTS',
              'controller_os_type': 'ubuntu1804',
              'controller_tcp_congestion_control': 'cubic',
              'controller_threads_per_core': 2,
              'controller_vm_count': 1,
              'controller_zone': 'Static - ubuntu@3.75.137.230',
              'cpi': 16.0,
              'data_type': 'dummy',
              'ht': 'TRUE',
              'mode': 'throughput',
              'perfkitbenchmarker_version': 'unknown',
              'precision': 'fp32',
              'run_number': 0,
              'steps': 100.0,
              'swi': 1.0,
              'testcase': 'test_aws_dlrm_pytorch_epyc_facebook_fp32_throughput_dummy_customized',
              'topology': 'DLRM',
              'uid': 'docker_pt0',
              'user_cmdline': '/PerfKitBenchmarker/pkb.py --owner=sf-ai-ziyi '
                              '--sar --sar_interval=1 '
                              '--trace_allow_benchmark_control '
                              '--run_uri=be9fa42c6a9b --temp_dir=/tmp/pkb '
                              '--benchmarks=docker_pt '
                              '--benchmark_config_file=/home/cumulus-config.yaml.mod.yaml '
                              '--ignore_package_requirements '
                              '--skopeo_insecure_registries=10.165.31.58:5000,harbor-npg.pact.intel.com,r49s04.gv.intel.com:10443,r18s05.gv.intel.com:10443,10.219.170.195:5000,10.54.45.149:10443,amr-registry.caas.intel.com,10.239.241.58:5000,ad09-28-wcp-storage.jf.intel.com:5000,marceline.zpn.intel.com,vcaa-jf5-lab-1.jf.intel.com:10443,dcsorepo.jf.intel.com,jf3jd011.jf.intel.com:5000,r49s04.gv.intel.com,0.0.0.0,0.0.0.0:5000,10.166.44.134:5000,10.219.170.133:5000 '
                              '--run_stage_iterations=1 '
                              '--install_packages=false --dpt_reuse_sut',
              'worker_/dev/loop0': 26324992,
              'worker_/dev/loop1': 58261504,
              'worker_/dev/loop2': 64966656,
              'worker_/dev/loop3': 107986944,
              'worker_/dev/loop4': 49242112,
              'worker_/dev/nvme0n1': 536870912000,
              'worker_cloud': 'Static',
              'worker_image': None,
              'worker_kernel_release': '5.15.0-1019-aws',
              'worker_num_cpus': 64,
              'worker_numa_node_count': 2,
              'worker_os_info': 'Ubuntu 22.04.1 LTS',
              'worker_os_type': 'ubuntu1804',
              'worker_tcp_congestion_control': 'cubic',
              'worker_threads_per_core': 2,
              'worker_vm_count': 1,
              'worker_zone': 'Static - ubuntu@3.120.235.131'},
 'metric': 'End to End Runtime',
 'official': False,
 'owner': 'sf-ai-ziyi',
 'product_name': 'PerfKitBenchmarker',
 'run_uri': 'be9fa42c6a9b-6184f729-abcc-4515-aa88-324cdbc22d07',
 'sample_uri': '58f1158d-ec63-44d8-8be6-696e9e048817',
 'test': 'dlrm_pytorch_epyc_facebook',
 'timestamp': 1662109990.8304358,
 'unit': 'seconds',
 'value': 113.25353693962097}
2022-09-02 02:13:10,846 be9fa42c6a9b MainThread publisher.py:487 DEBUG    Pretty-printing results to <_io.TextIOWrapper name='<stdout>' mode='w' encoding='utf-8'>:

-------------------------PerfKitBenchmarker Results Summary-------------------------
DLRM_PYTORCH_EPYC_FACEBOOK:
  BATCH_SIZE                            4.000000 -                              (controller_image="None" worker_image="None")
  CPI                                  16.000000 -                              (controller_image="None" worker_image="None")
  STEPS                               100.000000 -                              (controller_image="None" worker_image="None")
  SWI                                   1.000000 -                              (controller_image="None" worker_image="None")
  Throughput1                        3453.706000 samples/sec                    (controller_image="None" worker_image="None")
  Throughput2                        3810.706000 samples/sec                    (controller_image="None" worker_image="None")
  End to End Runtime                  113.253537 seconds                        (controller_image="None" worker_image="None")

-------------------------
For all tests: AOCC_REPO="https://af01p-igk.devtools.intel.com/artifactory/platform_hero-igk-local/zendnn/aocc-compiler-3.0.0.tar" AOCC_VER="3.0.0" AOCL_REPO="https://af01p-igk.devtools.intel.com/artifactory/platform_hero-igk-local/zendnn/aocl-linux-aocc-3.0-6.tar.gz" AOCL_VER="3.0-6" CONDA_REPO="https://repo.anaconda.com/miniconda/Miniconda3-py38_4.12.0-Linux-x86_64.sh" CONDA_VER="py38_4.12.0" DATASET_REPO="https://ubit-artifactory-or.intel.com/artifactory/dpgpaivsoworkloads-or-local/dlboost/dataset/pytorch/dlrm_inference_V1.tar" DATASET_VER="inference_V1" DLRM_BENCH_REPO="https://github.com/facebookresearch/dlrm" DLRM_BENCH_VER="11afc52120c5baaf0bfe418c610bc5cccb9c5777" JEMALLOC_REPO="https://github.com/jemalloc/jemalloc/archive/refs/tags/5.3.0.tar.gz" JEMALLOC_VER="5.3.0" MLPERF_LOGGING_REPO="https://github.com/mlcommons/logging/archive/refs/tags/2.0.0-rc4.tar.gz" MLPERF_LOGGING_VER="2.0.0-rc4" OS_IMAGE="ubuntu" OS_VER="20.04" PLATFORM="" ROME="" ZENDNN_REPO="https://af01p-igk.devtools.intel.com/artifactory/platform_hero-igk-local/zendnn/PT_v_ZenDNN_v3.2_Python_v.zip" ZENDNN_VER="3.2" batch_size="4.0" bench_source="facebook" controller_/dev/loop0="26324992" controller_/dev/loop1="58261504" controller_/dev/loop2="64966656" controller_/dev/loop3="107986944" controller_/dev/loop4="49242112" controller_/dev/nvme0n1="107374182400" controller_cloud="Static" controller_kernel_release="5.15.0-1019-aws" controller_num_cpus="16" controller_numa_node_count="1" controller_os_info="Ubuntu 22.04.1 LTS" controller_os_type="ubuntu1804" controller_tcp_congestion_control="cubic" controller_threads_per_core="2" controller_vm_count="1" controller_zone="Static - ubuntu@3.75.137.230" cpi="16.0" data_type="dummy" ht="TRUE" mode="throughput" perfkitbenchmarker_version="unknown" precision="fp32" run_number="0" steps="100.0" swi="1.0" testcase="test_aws_dlrm_pytorch_epyc_facebook_fp32_throughput_dummy_customized" topology="DLRM" uid="docker_pt0" user_cmdline="/PerfKitBenchmarker/pkb.py --owner=sf-ai-ziyi --sar --sar_interval=1 --trace_allow_benchmark_control --run_uri=be9fa42c6a9b --temp_dir=/tmp/pkb --benchmarks=docker_pt --benchmark_config_file=/home/cumulus-config.yaml.mod.yaml --ignore_package_requirements --skopeo_insecure_registries=10.165.31.58:5000,harbor-npg.pact.intel.com,r49s04.gv.intel.com:10443,r18s05.gv.intel.com:10443,10.219.170.195:5000,10.54.45.149:10443,amr-registry.caas.intel.com,10.239.241.58:5000,ad09-28-wcp-storage.jf.intel.com:5000,marceline.zpn.intel.com,vcaa-jf5-lab-1.jf.intel.com:10443,dcsorepo.jf.intel.com,jf3jd011.jf.intel.com:5000,r49s04.gv.intel.com,0.0.0.0,0.0.0.0:5000,10.166.44.134:5000,10.219.170.133:5000 --run_stage_iterations=1 --install_packages=false --dpt_reuse_sut" worker_/dev/loop0="26324992" worker_/dev/loop1="58261504" worker_/dev/loop2="64966656" worker_/dev/loop3="107986944" worker_/dev/loop4="49242112" worker_/dev/nvme0n1="536870912000" worker_cloud="Static" worker_kernel_release="5.15.0-1019-aws" worker_num_cpus="64" worker_numa_node_count="2" worker_os_info="Ubuntu 22.04.1 LTS" worker_os_type="ubuntu1804" worker_tcp_congestion_control="cubic" worker_threads_per_core="2" worker_vm_count="1" worker_zone="Static - ubuntu@3.120.235.131"

2022-09-02 02:13:10,846 be9fa42c6a9b MainThread publisher.py:543 INFO     Publishing 7 samples to /tmp/pkb/runs/be9fa42c6a9b/perfkitbenchmarker_results.json
2022-09-02 02:13:10,846 be9fa42c6a9b MainThread pkb.py:1668 INFO     Benchmark run statuses:
-------------------------------------------------------------------
Name                        UID         Status     Failed Substatus
-------------------------------------------------------------------
dlrm_pytorch_epyc_facebook  docker_pt0  SUCCEEDED                  
-------------------------------------------------------------------
Success rate: 100.00% (1/1)
2022-09-02 02:13:10,847 be9fa42c6a9b MainThread pkb.py:1670 INFO     Complete logs can be found at: /tmp/pkb/runs/be9fa42c6a9b/pkb.log
2022-09-02 02:13:10,847 be9fa42c6a9b MainThread pkb.py:1672 INFO     Completion statuses can be found at: /tmp/pkb/runs/be9fa42c6a9b/completion_statuses.json
`
